import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Env from '@ioc:Adonis/Core/Env';
import { Question, User } from 'App/Models';

export default class QuestionSeeder extends BaseSeeder {
  public async run() {
    const [email, name] = 'matt@myclient.info,Matt Burgess'.split(',');
    const password = Env.get('MATT_PASSWORD');
    const { id: userId } = await User.create({ email, name, password });

    const questions = [
      {
        text: 'In Doctor Who what does T.A.R.D.I.S. stand for?',
        userId,
        answers: [{ text: 'Time And Relative Dimensions In Space', points: 1, sort: 0 }],
        tags: ['9a46261d-db91-4c2e-8f65-3aefff8aeef1'],
      },
      {
        userId,
        text: 'Which musical interval was banned in the 13th Century',
        type: 1,
        answers: [
          { text: 'None', points: 5, sort: 1 },
          { text: 'Tritone', points: 1, sort: 2 },
        ],
      },
      {
        userId,
        text: "In The Lord of The Rings, what was Gollum's original name",
        type: 1,
        answers: [{ text: 'Smeagol' }],
        tags: ['0cc875a9-7338-495a-94b1-5aa28bf2bbd9', 'eae15870-b4b2-440f-b36e-78ef517e8bbe'],
      },
      {
        userId,
        text: 'What was the model number of the Red Dress Cylon in the Battlestar Galactica remake?',
        type: 2,
        answers: [
          { text: 'Seven of Nine', points: 0, sort: 1 },
          { text: 'Number Six', points: 1, sort: 2 },
          { text: 'Number Five', points: 0, sort: 3 },
          { text: 'Patient Zero', points: 0, sort: 4 },
        ],
        tags: ['f14334ea-7e8f-4dd6-b3ba-e4970f4c16bc'],
      },
      {
        userId,
        text: 'In the Fallout Universe what year did the bombs drop?',
        type: 2,
        answers: [
          { text: '1945', points: 0, sort: 1 },
          { text: '2025', points: 0, sort: 2 },
          { text: '2044', points: 0, sort: 3 },
          { text: '2077', points: 1, sort: 4 },
        ],
        tags: ['f14334ea-7e8f-4dd6-b3ba-e4970f4c16bc'],
      },
      {
        userId,
        text: 'What year did the Suez Canal open?',
        type: 2,
        answers: [
          { text: '1860', points: 0, sort: 1 },
          { text: '1869', points: 1, sort: 2 },
        ],
      },
      { userId, text: 'What is the capital of Thailand?', answers: [{ text: 'Bangkok', points: 1 }] },
      { userId, text: 'What is the most abundant metal in the human body?', answers: [{ text: 'Calcium', points: 1 }] },
      {
        userId,
        text: 'One point for every actor who played a Doctor Who - canonical BBC TV series only',
        type: 3,
        answers: [
          { text: 'William Hartnell', sort: 1 },
          { text: 'Patrick Troughton', sort: 2 },
          { text: 'Jon Pertwee', sort: 3 },
          { text: 'Tom Baker', sort: 4 },
          { text: 'Peter Davison', sort: 5 },
          { text: 'Colin Baker', sort: 6 },
          { text: 'Sylvester McCoy', sort: 7 },
          { text: 'Paul McGann', sort: 8 },
          { text: 'Christopher Eccleston', sort: 9 },
          { text: 'David Tennant', sort: 10 },
          { text: 'Matt Smith', sort: 11 },
          { text: 'Peter Capaldi', sort: 12 },
          { text: 'Jodie Whittaker', sort: 13 },
        ],
      },
      {
        userId,
        text: 'Coffee chain Starbucks takes its name from a character in which classic novel?',
        answers: [{ text: 'Moby Dick' }],
        tags: ['0cc875a9-7338-495a-94b1-5aa28bf2bbd9'],
      },
      {
        userId,
        text: 'In the recent (including and since 4) Fallout games, what does each letter of S.P.E.C.I.A.L. stand for?',
        type: 2,
        answers: [
          { text: 'Strength', sort: 1 },
          { text: 'Perception', sort: 2 },
          { text: 'Endurance', sort: 3 },
          { text: 'Charisma', sort: 4 },
          { text: 'Intelligence', sort: 5 },
          { text: 'Agility', sort: 6 },
          { text: 'Luck', sort: 7 },
        ],
        tags: ['f14334ea-7e8f-4dd6-b3ba-e4970f4c16bc'],
      },
      {
        userId,
        text: 'Also known as the "Demon Barber of Fleet Street" this English musical character\'s victims were then baked into pies.',
        type: 1,
        answers: [{ text: 'Sweeney Todd' }],
        tags: ['f14334ea-7e8f-4dd6-b3ba-e4970f4c16bc'],
      },
    ];

    for (const rawQuestion of questions) {
      const question = await Question.create(rawQuestion);
      await question.related('answers').createMany(rawQuestion.answers);
      if (rawQuestion.tags) {
        await question.related('tags').sync(rawQuestion.tags);
      }
    }
  }
}
