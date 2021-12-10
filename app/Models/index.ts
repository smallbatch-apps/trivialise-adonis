export { default as UuidModel } from './UuidModel';
export { default as Answer } from './Answer';
export { default as Document } from './Document';
export { default as Event } from './Event';
export { default as Question } from './Question';
export { default as QuestionType } from './QuestionType';
export { default as Series } from './Series';
export { default as User } from './User';
export { default as Tag } from './Tag';
export { default as CamelCaseNamingStrategy } from './CameCaseNamingStrategy';

export const enum QuestionTypes {
  Simple = 1,
  MultipleChoice,
  MultipleCorrect,
  TrueFalse,
}

export enum DocumentStatuses {
  New = 1,
  Moved,
}
