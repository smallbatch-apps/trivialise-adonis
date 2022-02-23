import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, validator, rules } from '@ioc:Adonis/Core/Validator';
import fs from 'fs';
import AWS from 'aws-sdk';
import Env from '@ioc:Adonis/Core/Env';
import { DocumentStatuses, Question, Document } from 'App/Models';
import StorageNotFoundException from 'App/Exceptions/StorageNotFoundException';

export default class DocumentsController {
  public async store({ request, bouncer }: HttpContextContract) {
    await request.validate({
      schema: schema.create({
        questionId: schema.string({}, [rules.uuid({ version: 4 })]),
      }),
      reporter: validator.reporters.api,
    });

    const upload = request.file('document');

    if (!upload) throw new Error('No Document Sent');

    const question = await Question.findOrFail(request.input('questionId'));

    await bouncer.authorize('editQuestion', question);

    const document = await question.related('documents').create({
      title: request.input('title'),
      filename: upload.clientName,
      tempfile: upload.tmpPath,
    });

    const endpoint = Env.get('DO_SPACES_ENDPOINT', '');
    const accessKeyId = Env.get('DO_SPACES_KEY', '');
    const secretAccessKey = Env.get('DO_SPACES_SECRET', '');
    const storageName = Env.get('DO_SPACES_NAME', '');

    if (!endpoint) throw new StorageNotFoundException('No document storage found', 500);

    const s3 = new AWS.S3({ endpoint, accessKeyId, secretAccessKey });

    const filePath = `${request.input('type')}/${document.id}.${upload.extname}`;
    const location = `https://${storageName}.${endpoint}/${filePath}`;
    try {
      await s3
        .putObject({
          Key: filePath,
          Bucket: Env.get('DO_SPACES_NAME', ''),
          Body: fs.readFileSync(upload.tmpPath!),
          ACL: 'public-read',
          ContentType: upload.type,
        })
        .promise();

      document.location = location;
      document.status = DocumentStatuses.Moved;
      await document.save();

      return document;
    } catch (error) {
      console.log(error);
      throw new Error('Document upload unsuccessful');
    }
  }

  public async destroy({ params: { id }, response }: HttpContextContract) {
    const document = await Document.findOrFail(id);
    await document.delete();
    response.status(200);
  }
}
