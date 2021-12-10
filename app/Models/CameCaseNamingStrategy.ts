import { string } from '@ioc:Adonis/Core/Helpers';
import { SnakeCaseNamingStrategy, BaseModel } from '@ioc:Adonis/Lucid/Orm';

export default class CamelCaseNamingStrategy extends SnakeCaseNamingStrategy {
  public columnName(_model: typeof BaseModel, propertyName: string) {
    return string.snakeCase(propertyName);
  }
}
