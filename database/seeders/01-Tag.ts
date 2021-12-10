import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { Tag } from 'App/Models';

export default class TagSeeder extends BaseSeeder {
  public async run() {
    const rawTags = [
      {
        id: '0cc875a9-7338-495a-94b1-5aa28bf2bbd9',
        text: 'literature',
        colour: '#92400E',
        iconColour: '#FBBF24',
        iconSecondaryColour: '#B45309',
        icon: 'books',
      },
      { id: 'eae15870-b4b2-440f-b36e-78ef517e8bbe', text: 'Film', colour: '', iconColour: '#1F2937', iconSecondaryColour: '#7DD3FC', icon: 'film' },
      { id: '604abd8b-11e0-419a-ab91-ab8abf430244', text: 'Sports', colour: '', iconColour: '#FAFAF9', iconSecondaryColour: '#44403C', icon: 'futbol' },
      { id: '607b3a19-04e8-4e35-b2c5-07cedd919695', text: 'Music', colour: '', iconColour: '#7E22CE', iconSecondaryColour: '#6B21A8', icon: 'music' },
      { id: 'c948e09c-2606-4eb3-9461-8334b3f71135', text: 'Science', colour: '', iconColour: '', iconSecondaryColour: '', icon: 'atom-alt' },
      {
        id: '213467cd-10a0-4d9b-9f50-26374dd62963',
        text: 'Geography',
        colour: '',
        iconColour: '#22C55E',
        iconSecondaryColour: '#38BDF8',
        icon: 'globe-africa',
      },
      { id: 'bb1d66ce-c7cf-43d4-a672-0d1006264ba0', text: 'Nature', colour: '', iconColour: '#854D0E', iconSecondaryColour: '#FDE047', icon: 'kiwi-bird' },
      { id: 'f14334ea-7e8f-4dd6-b3ba-e4970f4c16bc', text: 'Gaming', colour: '', iconColour: '#D6D3D1', iconSecondaryColour: '#EF4444', icon: 'gamepad-alt' },
      { id: '454df36f-34a0-4e75-ad28-e614873fae93', text: 'Easy', colour: '', iconColour: '#BEF264', iconSecondaryColour: '#EF4444', icon: 'shapes' },
      { id: 'ce3bab2f-fec9-4b43-9fc1-53fcd0041f21', text: 'Difficult', colour: '', iconColour: '#F9A8D4', iconSecondaryColour: '#EC4899', icon: 'brain' },
      { id: '9a46261d-db91-4c2e-8f65-3aefff8aeef1', text: 'Television', colour: '', iconColour: '#713F12', iconSecondaryColour: '#EC4899', icon: 'tv-retro' },
      { id: '786f4936-8378-4bcd-a18f-8a78b9637dfb', text: 'History', colour: '', iconColour: '#A8A29E', iconSecondaryColour: '#D6D3D1', icon: 'landmark' },
    ];

    await Tag.createMany(rawTags);
  }
}
