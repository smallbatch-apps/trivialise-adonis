import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Env from '@ioc:Adonis/Core/Env';
import { Question, User, QuestionTypes, Tags } from 'App/Models';

export default class QuestionSeeder extends BaseSeeder {
  public async run() {
    const [email, name] = 'matt@myclient.info,Matt Burgess'.split(',');
    const password = Env.get('MATT_PASSWORD');
    const { id: userId } = await User.create({ email, name, password });

    const questions = [
      {
        text: 'In Doctor Who what does T.A.R.D.I.S. stand for?',
        userId,
        answers: [{ text: 'Time And Relative Dimensions In Space' }],
        tags: [Tags.Television],
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
        tags: [Tags.Literature, Tags.Film],
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
        tags: [Tags.Television],
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
        tags: [Tags.Gaming],
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
        tags: [Tags.History],
      },
      { userId, text: 'What is the capital of Thailand?', answers: [{ text: 'Bangkok' }], tags: [Tags.Geography] },
      { userId, text: 'What is the most abundant metal in the human body?', answers: [{ text: 'Calcium' }], tags: [Tags.Science] },
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
        tags: [Tags.Television],
      },
      {
        userId,
        text: 'Coffee chain Starbucks takes its name from a character in which classic novel?',
        answers: [{ text: 'Moby Dick' }],
        tags: [Tags.Literature],
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
        tags: [Tags.Gaming],
      },
      {
        userId,
        text: 'Also known as the "Demon Barber of Fleet Street" this English musical character\'s victims were then baked into pies.',
        answers: [{ text: 'Sweeney Todd' }],
        tags: [Tags.Literature],
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
        tags: [Tags.Science],
      },
      {
        userId,
        text: 'Named for a Beatles song, she was the first discovered fossil of Australopithecus afarensis',
        answers: [{ text: 'Lucy' }],
        tags: [Tags.Science],
      },
      {
        userId,
        text: 'In the year did the Chernobyl Disaster occur?',
        answers: [{ text: '1986' }],
        tags: [Tags.History],
      },
      {
        userId,
        text: 'Who was the first woman to win a Nobel Prize?',
        answers: [{ text: 'Marie Curie' }],
        tags: [Tags.Science, Tags.History],
      },
      {
        userId,
        text: 'Who wrote the Sherlock Holmes novels?',
        answers: [{ text: 'Sir Arthur Conan Doyle' }],
        tags: [Tags.Literature],
      },
      {
        userId,
        text: 'Who was the first president of the United States of America?',
        answers: [{ text: 'George Washington' }],
        tags: [Tags.History, Tags.Easy],
      },
      {
        userId,
        text: 'Name one of the two mammals that lays eggs.',
        answers: [{ text: 'Echidna' }, { text: 'Platypus' }],
        tags: [Tags.Science],
      },
      {
        userId,
        text: 'What planet lies closest to the sun?',
        answers: [{ text: 'Mercury' }],
        tags: [Tags.Science, Tags.Easy],
      },
      {
        userId,
        text: 'The Lord of the Rings was written by JRR Tolkien. But what does JRR stand for?',
        answers: [{ text: 'John Ronald Reuel' }],
        tags: [Tags.Literature, Tags.Difficult],
      },
      {
        userId,
        type: QuestionTypes.TrueFalse,
        text: 'True or False: The platypus is venomous.',
        answers: [{ text: 'True' }],
        tags: ['bb1d66ce-c7cf-43d4-a672-0d1006264ba0'],
      },
      {
        userId,
        text: 'A point for each name of the four replicants Blade Runner’s Deckard was originally sent to “retire”?',
        answers: [{ text: 'Priss' }, { text: 'Leon' }, { text: 'Roy Batty' }, { text: 'Zhora' }],
        tags: [Tags.Film],
      },
      {
        userId,
        text: 'Which STD is commonly referred to as The Clap?',
        answers: [{ text: 'Gonorrhea' }],
        tags: [Tags.Science, Tags.Nature],
      },
      {
        userId,
        text: 'What metal is the most electrically conductive?',
        answers: [{ text: 'Silver' }],
        tags: [Tags.Science, Tags.Difficult],
      },
      {
        userId,
        text: 'What is the longest a person can theoretically serve as US president?',
        answers: [{ text: '10 Years' }],
        tags: [Tags.History, Tags.Difficult],
      },
      {
        userId,
        text: 'How many universities are in the famed Ivy League?',
        answers: [{ text: '8' }],
      },
      {
        userId,
        type: QuestionTypes.MultipleCorrect,
        text: 'One point for each university you can name in the Ivy League',
        answers: [
          { text: 'Yale' },
          { text: 'Dartmouth' },
          { text: 'Cornell' },
          { text: 'Brown' },
          { text: 'Harvard' },
          { text: 'Columbia' },
          { text: 'Princeton' },
          { text: 'Pennsylvania' },
        ],
        tags: [Tags.Difficult],
      },
      {
        userId,
        text: 'Which is the only planet named for a Greek instead of Roman God?',
        answers: [{ text: 'Uranus' }],
        tags: [Tags.Science],
      },
      {
        userId,
        text: 'What is the largest moon in the solar system?',
        answers: [{ text: 'Ganymede' }],
        tags: [Tags.Science],
      },
      {
        userId,
        text: 'The planets Uranus, Saturn, Jupiter and Neptune are known as __ giants?',
        answers: [{ text: 'Gas' }],
        tags: [Tags.Science, Tags.Easy],
      },
      {
        userId,
        text: 'Rounded to the nearest whole number, what percentage of the solar system’s mass is the sun?',
        answers: [{ text: '100%' }],
        tags: [Tags.Science],
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
