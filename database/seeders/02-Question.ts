import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Env from '@ioc:Adonis/Core/Env';
import { Question, QuestionTypes, Tags } from 'App/Models';
import Company from 'App/Models/Company';

// const endpoint = Env.get('DO_SPACES_ENDPOINT', '');
// const accessKeyId = Env.get('DO_SPACES_KEY', '');
// const secretAccessKey = Env.get('DO_SPACES_SECRET', '');
// const storageName = Env.get('DO_SPACES_NAME', '');

export default class QuestionSeeder extends BaseSeeder {
  public async run() {
    const company = await Company.create({ id: 'c7c3c627-322f-41fc-a483-957428f79f5b', name: 'Trivialize' });
    const companyId = company.id;

    await company.related('users').create({ email: 'matt@smallbatch.io', name: 'Matt Burgess', password: Env.get('MATT_PASSWORD') });

    const questions = [
      {
        companyId,
        text: 'In Doctor Who what does T.A.R.D.I.S. stand for?',
        answers: [{ text: 'Time And Relative Dimensions In Space' }],
        tags: [Tags.Television],
        documents: [{ location: 'tardis.jpeg', title: 'The TARDIS - Doctor Who' }],
      },
      {
        companyId,
        text: 'Which musical interval was banned in the 13th Century',
        type: QuestionTypes.MultipleCorrect,
        answers: [
          { text: 'None', points: 5, sort: 1 },
          { text: 'Tritone', points: 1, sort: 2 },
        ],
      },
      {
        companyId,
        text: "In The Lord of The Rings, what was Gollum's original name",
        answers: [{ text: 'Smeagol' }],
        tags: [Tags.Literature, Tags.Film],
        documents: [{ location: 'gollum.jpeg', title: 'Image of Gollum' }],
      },
      {
        companyId,
        text: 'What was the model number of the Red Dress Cylon in the Battlestar Galactica remake?',
        type: QuestionTypes.MultipleChoice,
        answers: [
          { text: 'Seven of Nine', points: 0, sort: 1 },
          { text: 'Number Six', points: 1, sort: 2 },
          { text: 'Number Five', points: 0, sort: 3 },
          { text: 'Patient Zero', points: 0, sort: 4 },
        ],
        tags: [Tags.Television],
        documents: [{ location: 'cylon-6.jpg', title: 'Tricia Helfer image' }],
      },
      {
        companyId,
        text: 'In the Fallout Universe what year did the bombs drop?',
        type: QuestionTypes.MultipleChoice,
        answers: [
          { text: '1945', points: 0, sort: 1 },
          { text: '2025', points: 0, sort: 2 },
          { text: '2044', points: 0, sort: 3 },
          { text: '2077', points: 1, sort: 4 },
        ],
        tags: [Tags.Gaming],
        documents: [{ location: 'fallout.jpg', title: 'Fallout logo hero image' }],
      },
      {
        companyId,
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
      {
        companyId,
        text: 'What is the capital of Thailand?',
        answers: [{ text: 'Bangkok' }],
        tags: [Tags.Geography, Tags.Easy],
        documents: [{ location: 'bangkok.jpeg', title: 'Bangkok' }],
      },
      { companyId, text: 'What is the most abundant metal in the human body?', answers: [{ text: 'Calcium' }], tags: [Tags.Science] },
      {
        companyId,
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
          { text: 'Ncuti Gatwa', sort: 14 },
        ],
        tags: [Tags.Television],
        documents: [{ location: 'doctor-whos.jpg', title: 'Image of multiple Doctor Who Actors' }],
      },
      {
        companyId,
        text: 'Coffee chain Starbucks takes its name from a character in which classic novel?',
        answers: [{ text: 'Moby Dick' }],
        tags: [Tags.Literature],
      },
      {
        companyId,
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
        documents: [{ location: 'vault-boy.png', title: 'Vault boy' }],
      },
      {
        companyId,
        text: 'Also known as the "Demon Barber of Fleet Street" this English musical character\'s victims were then baked into pies.',
        answers: [{ text: 'Sweeney Todd' }],
        tags: [Tags.Literature],
      },
      {
        companyId,
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
        companyId,
        text: 'An orrery is a model (often mechanical) of what?',
        answers: [{ text: 'The Solar System' }],
        tags: [Tags.Science],
      },
      {
        companyId,
        text: 'Named for a Beatles song, she was the first discovered fossil of Australopithecus afarensis',
        answers: [{ text: 'Lucy' }],
        tags: [Tags.Science],
      },
      {
        companyId,
        text: 'In the year did the Chernobyl Disaster occur?',
        type: QuestionTypes.MultipleChoice,
        answers: [
          { text: '1979', points: 0, sort: 1 },
          { text: '1986', points: 1, sort: 2 },
          { text: '1989', points: 0, sort: 3 },
          { text: '1992', points: 0, sort: 4 },
        ],
        tags: [Tags.History],
      },
      {
        companyId,
        text: 'What is the capital of Brazil?',
        type: QuestionTypes.MultipleChoice,
        answers: [
          { text: 'Brasilia', points: 1, sort: 1 },
          { text: 'São Paulo', points: 0, sort: 2 },
          { text: 'Rio de Janeiro', points: 0, sort: 3 },
          { text: 'Buenos Aires', points: 0, sort: 4 },
        ],
        tags: [Tags.Geography],
        documents: [{ location: 'brazil-christ.webp', title: 'Brazil - Christ the Redeemer' }],
      },
      {
        companyId,
        text: 'This classic Brazilian statue is known as Christ the...?',
        type: QuestionTypes.MultipleChoice,
        answers: [{ text: 'Redeemer' }],
        tags: [Tags.Geography],
        documents: [{ location: 'brazil-christ.webp', title: 'Brazil - Christ the Redeemer' }],
      },
      {
        companyId,
        text: 'Who was the first woman to win a Nobel Prize?',
        answers: [{ text: 'Marie Curie' }],
        tags: [Tags.Science, Tags.History],
      },
      {
        companyId,
        text: 'Who wrote the Sherlock Holmes novels?',
        answers: [{ text: 'Sir Arthur Conan Doyle' }],
        tags: [Tags.Literature],
        documents: [{ location: 'sherlock-holmes.jpeg', title: 'Image of platypus' }],
      },
      {
        companyId,
        text: 'Who was the first president of the United States of America?',
        answers: [{ text: 'George Washington' }],
        tags: [Tags.History, Tags.Easy],
      },
      {
        companyId,
        type: QuestionTypes.MultipleCorrect,
        text: 'Name one of the two mammals that lays eggs.',
        answers: [{ text: 'Echidna' }, { text: 'Platypus' }],
        tags: [Tags.Science],
      },
      {
        companyId,
        text: 'What planet lies closest to the sun?',
        answers: [{ text: 'Mercury' }],
        tags: [Tags.Science, Tags.Easy],
      },
      {
        companyId,
        text: 'The Lord of the Rings was written by JRR Tolkien. But what does JRR stand for?',
        answers: [{ text: 'John Ronald Reuel' }],
        tags: [Tags.Literature, Tags.Difficult],
      },
      {
        companyId,
        type: QuestionTypes.TrueFalse,
        text: 'True or False: The platypus is venomous.',
        answers: [{ text: 'True' }],
        tags: [Tags.Nature],
        documents: [{ location: 'platypus.jpg', title: 'Image of platypus' }],
      },
      {
        companyId,
        text: 'A point for each name of the four replicants Blade Runner’s Deckard was originally sent to “retire”?',
        answers: [{ text: 'Priss' }, { text: 'Leon' }, { text: 'Roy Batty' }, { text: 'Zhora' }],
        tags: [Tags.Film],
      },
      {
        companyId,
        text: 'Which STD is commonly referred to as The Clap?',
        answers: [{ text: 'Gonorrhea' }],
        tags: [Tags.Science, Tags.Nature],
      },
      {
        companyId,
        text: 'What’s the name of the possessed doll that starts killing in the Child’s Play series?',
        answers: [{ text: 'Chucky' }],
        tags: [Tags.Film],
        documents: [{ location: 'chucky.png', title: 'Chucky from Childs Play' }],
      },
      {
        companyId,
        text: 'What metal is the most electrically conductive?',
        answers: [{ text: 'Silver' }],
        tags: [Tags.Science, Tags.Difficult],
      },
      {
        companyId,
        text: 'What is the longest a person can theoretically serve as US president?',
        answers: [{ text: '10 Years' }],
        tags: [Tags.History, Tags.Difficult],
      },
      {
        companyId,
        text: 'How many universities are in the famed Ivy League?',
        answers: [{ text: '8' }],
        documents: [{ location: 'harvard.webp', title: 'Harvard campus' }],
      },
      {
        companyId,
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
        documents: [{ location: 'harvard.webp', title: 'Harvard campus' }],
      },
      {
        companyId,
        text: 'Which is the only planet named for a Greek instead of Roman God?',
        answers: [{ text: 'Uranus' }],
        tags: [Tags.Science],
      },
      {
        companyId,
        text: 'What is the largest moon in the solar system?',
        answers: [{ text: 'Ganymede' }],
        tags: [Tags.Science],
      },
      {
        companyId,
        text: 'The planets Uranus, Saturn, Jupiter and Neptune are known as __ giants?',
        answers: [{ text: 'Gas' }],
        tags: [Tags.Science, Tags.Easy],
      },
      {
        companyId,
        text: 'Rounded to the nearest whole number, what percentage of the solar system’s mass is the sun?',
        answers: [{ text: '100%' }],
        tags: [Tags.Science],
        documents: [{ location: 'the-sun.jpeg', title: 'Our sun' }],
      },
      {
        companyId,
        text: 'What were the first names of the Wright Brothers?',
        answers: [{ text: 'Orville and Wilbur' }],
        tags: [Tags.History, Tags.Science],
        documents: [{ location: 'wright-brothers.jpeg', title: 'Orville and Wilbur Wright' }],
      },
      {
        companyId,
        text: 'What is the best selling album of all time?',
        answers: [{ text: 'Thriller by Michael Jackson ' }],
        tags: [],
      },
      {
        companyId,
        text: 'What sub-subatomic particle are protons and neutrons made out of?',
        answers: [{ text: 'Quarks' }],
        tags: [Tags.Science],
      },
      {
        companyId,
        text: 'Which of the following is not a valid type of quark?',
        answers: [
          { text: 'Strange', points: 0, sort: 1 },
          { text: 'Charm', points: 0, sort: 2 },
          { text: 'Up', points: 0, sort: 3 },
          { text: 'Clean', points: 1, sort: 4 },
          { text: 'Bottom', points: 0, sort: 5 },
        ],
        tags: [Tags.Science],
      },
      {
        companyId,
        text: 'What do the letters in WD-40 stand for?',
        answers: [{ text: 'Water Displacement' }],
        tags: [Tags.Science],
        documents: [{ location: 'wd-40.jpeg', title: 'WD-40 can' }],
      },
      {
        companyId,
        type: QuestionTypes.MultipleChoice,
        text: 'What does AR in the AR-15 stand for?',
        answers: [
          { text: 'Assault Rifle', points: 0, sort: 1 },
          { text: 'Automatic Rifle', points: 0, sort: 2 },
          { text: 'Armalite', points: 1, sort: 3 },
          { text: 'Armed Range', points: 0, sort: 4 },
        ],
      },
      {
        companyId,
        type: QuestionTypes.MultipleCorrect,
        text: 'The offspring of a donkey and a horse is a what?',
        answers: [{ text: 'Mule' }, { text: 'Hinney' }],
        tags: [Tags.Science],
        documents: [{ location: 'donkey.webp', title: 'Donkey' }, { location: 'horse.jpeg', title: 'Horse' }],
      },
      {
        companyId,
        text: 'The Olympics are held every how many years?',
        answers: [{ text: '4' }],
        tags: [Tags.Sports],
      },
      {
        companyId,
        text: 'Which sport is known as "the beautiful game"?',
        answers: [{ text: 'Soccer' }],
        tags: [Tags.Sports],
      },
      {
        companyId,
        text: 'What was the first city to host the Olympics twice?',
        answers: [{ text: 'Paris' }],
        tags: [Tags.Sports, Tags.History],
      },
      {
        companyId,
        type: QuestionTypes.MultipleChoice,
        text: 'Thalassaphobia is the irrational fear of what?',
        answers: [
          { text: 'The Dark', points: 0, sort: 1 },
          { text: 'Clowns', points: 0, sort: 2 },
          { text: 'The Ocean', points: 1, sort: 3 },
          { text: 'The Number 13', points: 0, sort: 4 },
        ],
        tags: [Tags.Nature],
      },
      {
        companyId,
        text: 'In the Harry Potter Universe, Hogwarts is in what country?',
        answers: [{ text: 'Scotland' }],
        tags: [Tags.Film, Tags.Literature],
        documents: [{ location: 'hogwarts.jpeg', title: 'Hogwarts School of Witches and Wizardry' }],
      },
      {
        companyId,
        text: 'Samuel Langhorne Clemens was better known as which famous author?',
        answers: [{ text: 'Mark Twain' }],
        tags: [Tags.Literature],
      },
      {
        companyId,
        text: 'The space telescope launched in 2022 was named for which astronomer?',
        answers: [{ text: 'James Webb' }],
        tags: [Tags.Science],
      },
      {
        companyId,
        type: QuestionTypes.MultipleChoice,
        text: 'Which of the following is a real science?',
        answers: [
          { text: 'Kinesthetics', points: 1, sort: 1 },
          { text: 'Zetetics', points: 0, sort: 2 },
          { text: 'Diatetics', points: 0, sort: 3 },
          { text: 'Calisthenics', points: 0, sort: 4 },
        ],
        tags: [Tags.Science],
      },
      {
        companyId,
        text: 'Which country has the only successful program to land a probe on Venus?',
        answers: [{ text: 'Russia' }],
        tags: [Tags.Science],
      },
      {
        companyId,
        text: 'An infection by the variola virus is known as what disease?',
        answers: [{ text: 'Smallpox' }],
        tags: [Tags.Science],
      },
      {
        companyId,
        text: 'What is the name of the disease caused by lyssavirus',
        answers: [{ text: 'Rabies' }],
        tags: [Tags.Science],
      },
      {
        companyId,
        text: 'Who was Time Man of the Year in 1938?',
        answers: [{ text: 'Adolf Hitler' }],
        tags: [Tags.History],
      },
      {
        companyId,
        text: 'Who secretly funded the 1954 movie Animal Farm?',
        answers: [{ text: 'The CIA' }],
        tags: [Tags.Film],
      },
      {
        companyId,
        text: 'The Imitation Game featured Benedict Cumberbatch playing which famous British mathematician and codebreaker?',
        answers: [{ text: 'Alan Turing' }],
        tags: [Tags.Science, Tags.History, Tags.Film],
      },

      {
        companyId,
        text: 'Medieval Italian poet Dante Alegieri is best known for what famous narrative poem?',
        answers: [{ text: 'The Divine Comedy' }],
        tags: [Tags.History, Tags.Literature],
      },
      {
        companyId,
        type: QuestionTypes.MultipleChoice,
        text: 'Psychopomps are spirits that assist a person at the time of ….',
        answers: [
          { text: 'Marriage', points: 0, sort: 1 },
          { text: 'War', points: 0, sort: 2 },
          { text: 'Death', points: 1, sort: 3 },
          { text: 'Birth', points: 0, sort: 4 },
        ],
        tags: [Tags.Difficult],
      },

      {
        companyId,
        text: 'Stable points of orbit balanced between the gravity of multiple bodies are known as what points?',
        answers: [{ text: 'Lagrange' }],
        tags: [Tags.Science],
      },

      {
        companyId,
        text: 'What sport is played with a shuttlecock?',
        answers: [{ text: 'Badminton' }],
        tags: [Tags.Science],
      },

      {
        companyId,
        text: 'The Australian classic Wake in Fright is mostly set in which fictional country town?',
        answers: [{ text: 'Bundayabba' }],
      },

      {
        companyId,
        type: QuestionTypes.MultipleChoice,
        text: 'This popular New Zealand comic is known as Footrot What?',
        answers: [
          { text: 'Flats', points: 1, sort: 1 },
          { text: 'Hills', points: 0, sort: 2 },
          { text: 'Farm', points: 0, sort: 3 },
          { text: 'and Friends', points: 0, sort: 4 },
        ],
        tags: [Tags.Literature],
      },
      {
        companyId,
        type: QuestionTypes.MultipleChoice,
        text: 'What is the dot over a lowercase i or j called?',
        answers: [
          { text: 'Jot', points: 0, sort: 1 },
          { text: 'Pot', points: 0, sort: 2 },
          { text: 'Tittle', points: 1, sort: 3 },
          { text: 'Arc', points: 0, sort: 4 },
          { text: 'Tang', points: 0, sort: 5 },
        ],
      },
      {
        companyId,
        text: 'What is the name of the double dots above the German ä, ö, ü',
        answers: [{ text: 'Umlaut' }],
        tags: [Tags.Easy],
      },

      {
        companyId,
        text: 'Who is Asterix’ big friend?',
        answers: [{ text: 'Oblix' }],
        tags: [Tags.Easy, Tags.Literature],
      },

      {
        companyId,
        text: 'What is a male diva called?',
        answers: [{ text: 'Divo' }],
        tags: [Tags.Difficult],
      },
      {
        companyId,
        type: QuestionTypes.MultipleChoice,
        text: 'The spire on the Empire State Building was originally designed for what purpose?',
        answers: [
          { text: 'To protect against lightning', points: 0, sort: 1 },
          { text: 'to transmit radio signals', points: 0, sort: 2 },
          { text: 'to make the building taller', points: 0, sort: 3 },
          { text: 'to dock airships', points: 1, sort: 4 },
        ],
      },
      {
        companyId,
        type: QuestionTypes.MultipleChoice,
        text: 'What country was the band AC/DC formed in?',
        answers: [
          { text: 'Australia', points: 1, sort: 1 },
          { text: 'Scotland', points: 0, sort: 2},
          { text: 'Canada', points: 0, sort: 3 },
          { text: 'USA', points: 0, sort: 4 },
        ],
        tags: [Tags.Music],
      },
      {
        companyId,
        text: 'The Statue of Liberty is in which city?',
        answers: [{ text: 'New York' }],
        tags: [Tags.Geography],
      },
      {
        companyId,
        text: 'What year did Siam become Thailand?',
        answers: [{ text: '1939' }],
        tags: [Tags.History],
      },

      {
        companyId,
        text: 'What is the second largest state in the USA?',
        answers: [{ text: 'Minnesota' }],
        tags: [Tags.Geography],
      },
      {
        companyId,
        type: QuestionTypes.MultipleChoice,
        text: 'How many skeletons are stored in the Paris Catacombs?',
        answers: [
          { text: 'Nine hundred', points: 0, sort: 1 },
          { text: '12 thousand', points: 0, sort: 2 },
          { text: '500,000', points: 0, sort: 3 },
          { text: 'Six Million', points: 1, sort: 4 },
        ],
      },
      {
        companyId,
        text: 'What is the second largest state in the USA?',
        answers: [{ text: 'Minnesota' }],
        tags: [Tags.Geography],
      },

      {
        companyId,
        text: 'On high end brandy or cognacs what does the phrase VSOP stand for?',
        answers: [{ text: 'Very Superior Old Pale' }],
        tags: [Tags.Difficult],
      },
      {
        companyId,
        text: 'What country is home to the Chernobyl power plant?',
        answers: [{ text: 'Ukraine' }],
        tags: [Tags.History, Tags.Geography],
      },
      {
        companyId,
        text: 'Which planet has the most moons?',
        answers: [{ text: 'Saturn' }],
        tags: [Tags.Science],
      },
      {
        companyId,
        type: QuestionTypes.MultipleChoice,
        text: 'In the Lord of the Rings, the wizard Gandalf is not a human but one of the last of which race?',
        answers: [
          { text: 'Maiar', points: 1, sort: 1 },
          { text: 'Eldar', points: 0, sort: 2 },
          { text: 'Balrog', points: 0, sort: 3 },
          { text: 'Ainur', points: 0, sort: 4 },
        ],
      },
      {
        companyId,
        text: 'Which planet has the most moons?',
        answers: [{ text: 'Saturn' }],
        tags: [Tags.Science],
      },
      {
        companyId,
        text: 'Who was the first woman to win a Nobel prize?',
        answers: [{ text: 'Marie Curie' }],
        tags: [Tags.Science, Tags.History],
      },
      {
        companyId,
        text: 'Who was the first person to win two Nobel prizes?',
        answers: [{ text: 'Marie Curie' }],
        tags: [Tags.Science, Tags.History],
      },
      {
        companyId,
        text: 'The goal of 9-ball is to pot the 9. What colour is it?',
        answers: [{ text: 'Yellow' }],
        tags: [Tags.Sports],
      },
      {
        companyId,
        text: 'How many balls in a standard game of billiards (excluding the cue ball)?',
        answers: [{ text: '15' }],
        tags: [Tags.Sports],
      },

      {
        companyId,
        text: 'How many pockets on a standard pool table?',
        answers: [{ text: '6' }],
        tags: [Tags.Sports, Tags.Easy],
      },
      {
        companyId,
        text: 'Where did 80s DC supervillain Snowflame get his power?',
        answers: [{ text: 'Cocaine' }],
        tags: [Tags.Literature, Tags.Difficult],
      },
      {
        companyId,
        type: QuestionTypes.MultipleChoice,
        text: 'Which of the following is actually a dinosaur?',
        answers: [
          { text: 'Dimetrodon', points: 0, sort: 1 },
          { text: 'Yutyrannus', points: 1, sort: 2 },
          { text: 'Plesiosaur', points: 0, sort: 3 },
          { text: 'Pteranodon', points: 0, sort: 4 },
        ],
        tags: [Tags.Science],
      },
      {
        companyId,
        type: QuestionTypes.MultipleChoice,
        text: 'Which of the following is actually a dinosaur?',
        answers: [
          { text: 'Dimetrodon', points: 0, sort: 1 },
          { text: 'Plesiosaur', points: 0, sort: 2 },
          { text: 'Cassowary', points: 1, sort: 3 },
          { text: 'Mastodon', points: 0, sort: 4 },
        ],
        tags: [Tags.Science],
      },
      {
        companyId,
        text: 'How many tentacles does a squid have?',
        answers: [{ text: '2'} ],
        tags: [Tags.Science, Tags.Nature],
      },
      {
        companyId,
        text: 'Who wrote the novel To Kill a Mockingbird?',
        answers: [{ text: 'Harper Lee'} ],
        tags: [Tags.Literature],
      },
      {
        companyId,
        text: 'How many children does Elon Musk have with singer Grimes?',
        answers: [{ text: '2'} ]
      },
      {
        companyId,
        text: 'The nuclear bombs dropped on Hiroshima and Nagasaki were named Little Boy and…?',
        answers: [{ text: 'Fat Man'} ],
        tags: [Tags.History],
      },
      {
        companyId,
        text: 'What was the name of the plane that dropped a nuclear bomb on Hiroshima?',
        answers: [{ text: 'Enola Gay'} ],
        tags: [Tags.History],
      },
      {
        companyId,
        text: 'What is fast food chain Burger King called in Australia?',
        answers: [{ text: 'Hungry Jacks'} ],
      },
      {
        companyId,
        type: QuestionTypes.MultipleChoice,
        text: 'In what year was the original iPhone released?',
        answers: [
          { text: '2005', points: 0, sort: 1 },
          { text: '2007', points: 1, sort: 2 },
          { text: '2009', points: 0, sort: 3 },
          { text: '2010', points: 0, sort: 4 },
          { text: '2012', points: 0, sort: 4 },
        ],
        tags: [Tags.Science],
      },
      {
        companyId,
        text: 'How many days did the government of Elizabeth Truss run?',
        answers: [{ text: '44'} ],
        tags: [Tags.History],
      },
      {
        companyId,
        text: 'What year was the Great Fire of London?',
        answers: [{ text: '1666'} ],
        tags: [Tags.History],
      },
      {
        companyId,
        text: 'What year did the Titanic sink?',
        answers: [{ text: '1912'} ],
        tags: [Tags.History],
      },
      {
        companyId,
        text: 'What year and month did the Titanic sink?',
        answers: [{ text: 'April 1912'} ],
        tags: [Tags.History, Tags.Difficult],
      },
      {
        companyId,
        type: QuestionTypes.MultipleCorrect,
        text: 'A point for each Hogwarts House you can name',
        answers: [
          { text: 'Hufflepuff', sort: 1 },
          { text: 'Griffindor', sort: 2 },
          { text: 'Slytherin', sort: 3 },
          { text: 'Ravenclaw', sort: 4 },
        ],
        tags: [Tags.Literature, Tags.Film, Tags.Easy],
      },
      {
        companyId,
        type: QuestionTypes.MultipleChoice,
        text: 'Which of the following is not a real dinosaur',
        answers: [
          { text: 'Bambiraptor', points: 0, sort: 1 },
          { text: 'Technosaurus', points: 0, sort: 2 },
          { text: 'Erectopus', points: 0, sort: 3 },
          { text: 'Irritator', points: 0, sort: 4 },
          { text: 'Pantydraco', points: 0, sort: 5 },
          { text: 'Kittiosaur', points: 1, sort: 6 },
        ],
        tags: [Tags.Science, Tags.Nature],
      },
      {
        companyId,
        text: 'What was the name of the team of mostly female assassins in Kill Bill?',
        answers: [{ text: 'Deadly Assassin Viper Squad'} ],
        tags: [Tags.Film],
      },
    ];

    for (const rawQuestion of questions) {
      const question = await Question.create(rawQuestion);
      await question.related('answers').createMany(rawQuestion.answers);
      if (rawQuestion.documents) {
        await question.related('documents').createMany(rawQuestion.documents);
      }
      if (rawQuestion.tags) {
        await question.related('tags').sync(rawQuestion.tags);
      }
    }
  }
}
