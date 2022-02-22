import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Env from '@ioc:Adonis/Core/Env';
import { Question, User, QuestionTypes } from 'App/Models';

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
        type: QuestionTypes.MultipleCorrect,
        answers: [
          { text: 'None', points: 5, sort: 1 },
          { text: 'Tritone', points: 1, sort: 2 },
        ],
      },
      {
        userId,
        text: "In The Lord of The Rings, what was Gollum's original name",
        answers: [{ text: 'Smeagol' }],
        tags: ['0cc875a9-7338-495a-94b1-5aa28bf2bbd9', 'eae15870-b4b2-440f-b36e-78ef517e8bbe'],
      },
      {
        userId,
        text: 'What was the model number of the Red Dress Cylon in the Battlestar Galactica remake?',
        type: QuestionTypes.MultipleChoice,
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
        type: QuestionTypes.MultipleChoice,
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
        type: QuestionTypes.MultipleChoice,
        answers: [
          { text: '1860', points: 0, sort: 1 },
          { text: '1869', points: 1, sort: 2 },
          { text: '1906', points: 0, sort: 3 },
          { text: '1987', points: 0, sort: 4 },
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
        type: QuestionTypes.MultipleCorrect,
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
        answers: [{ text: 'Sweeney Todd' }],
        tags: ['f14334ea-7e8f-4dd6-b3ba-e4970f4c16bc'],
      },
      {
        userId,
        text: 'A cicerone is an expert on what topic?',
        type: QuestionTypes.MultipleChoice,
        answers: [
          { text: 'Mushrooms', points: 0, sort: 1 },
          { text: 'Beer', points: 1, sort: 2 },
          { text: 'Food', points: 0, sort: 3 },
          { text: 'Women', points: 0, sort: 4 },
        ],
      },
      {
        userId,
        text: 'An orrery is a model (often mechanical) of what?',
        answers: [{ text: 'The Solar System' }],
        tags: ['c948e09c-2606-4eb3-9461-8334b3f71135'],
      },
      {
        userId,
        text: 'Named for a Beatles song, she was the first discovered fossil of Australopithecus afarensis',
        answers: [{ text: 'Lucy' }],
        tags: ['c948e09c-2606-4eb3-9461-8334b3f71135'],
      },
      {
        userId,
        text: 'In the year did the Chernobyl Disaster occur?',
        answers: [{ text: '1986' }],
        tags: ['786f4936-8378-4bcd-a18f-8a78b9637dfb'],
      },
      {
        userId,
        text: 'Who was the first woman to win a Nobel Prize?',
        answers: [{ text: 'Marie Curie' }],
        tags: ['c948e09c-2606-4eb3-9461-8334b3f71135'],
      },
      {
        userId,
        text: 'Who wrote the Sherlock Holmes novels?',
        answers: [{ text: 'Sir Arthur Conan Doyle' }],
        tags: ['0cc875a9-7338-495a-94b1-5aa28bf2bbd9'],
      },
      {
        userId,
        text: 'Who was the first president of the United States of America?',
        answers: [{ text: 'George Washington' }],
        tags: ['454df36f-34a0-4e75-ad28-e614873fae93'],
      },
      {
        userId,
        text: 'Name one of the two mammals that lays eggs.',
        answers: [{ text: 'Echidna' }, { text: 'Platypus' }],
        tags: ['bb1d66ce-c7cf-43d4-a672-0d1006264ba0'],
      },
      {
        userId,
        text: 'What planet lies closest to the sun?',
        answers: [{ text: 'Echidna' }],
        tags: ['bb1d66ce-c7cf-43d4-a672-0d1006264ba0', 'bb1d66ce-c7cf-43d4-a672-0d1006264ba0'],
      },
      {
        userId,
        type: QuestionTypes.TrueFalse,
        text: 'True or False: The platypus is venomous.',
        answers: [{ text: 'True' }],
        tags: ['bb1d66ce-c7cf-43d4-a672-0d1006264ba0'],
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
