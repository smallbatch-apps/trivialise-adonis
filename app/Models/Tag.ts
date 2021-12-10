import { column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import { UuidModel, Question } from 'App/Models';

export default class Tag extends UuidModel {
  @column({ serializeAs: null })
  public ownerId: string | null;

  @column()
  public text: string;

  @column()
  public icon: string;

  @column()
  public colour: string;

  @column({ serializeAs: 'iconColour' })
  public iconColour: string;

  @column({ serializeAs: 'iconSecondaryColour' })
  public iconSecondaryColour: string;

  @manyToMany(() => Question)
  public questions: ManyToMany<typeof Question>;
}
