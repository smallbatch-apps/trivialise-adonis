import { column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import { UuidModel, Question } from 'App/Models';

export default class Tag extends UuidModel {
  @column({ serializeAs: null })
  public companyId: string | null;

  @column()
  public text: string;

  @column()
  public icon: string;

  @column()
  public colour: string;

  @column()
  public iconColour: string;

  @column()
  public iconSecondaryColour: string;

  @manyToMany(() => Question)
  public questions: ManyToMany<typeof Question>;
}
