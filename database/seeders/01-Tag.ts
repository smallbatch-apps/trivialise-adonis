import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { Tag, Tags } from 'App/Models';

export default class TagSeeder extends BaseSeeder {
  public async run() {
    const rawTags = [
      {
        id: Tags.Literature,
        text: 'Literature',
        colour: '#92400E',
        iconColour: '#FBBF24',
        iconSecondaryColour: '#B45309',
        icon: 'books',
      },
      { id: Tags.Film, text: 'Film', colour: '', iconColour: '#1F2937', iconSecondaryColour: '#7DD3FC', icon: 'film' },
      { id: Tags.Sports, text: 'Sports', colour: '', iconColour: '#FAFAF9', iconSecondaryColour: '#44403C', icon: 'futbol' },
      { id: Tags.Music, text: 'Music', colour: '', iconColour: '#7E22CE', iconSecondaryColour: '#6B21A8', icon: 'music' },
      { id: Tags.Science, text: 'Science', colour: '', iconColour: '', iconSecondaryColour: '', icon: 'atom-alt' },
      {
        id: Tags.Geography,
        text: 'Geography',
        colour: '',
        iconColour: '#22C55E',
        iconSecondaryColour: '#38BDF8',
        icon: 'globe-africa',
      },
      { id: Tags.Nature, text: 'Nature', colour: '', iconColour: '#854D0E', iconSecondaryColour: '#FDE047', icon: 'kiwi-bird' },
      { id: Tags.Gaming, text: 'Gaming', colour: '', iconColour: '#D6D3D1', iconSecondaryColour: '#EF4444', icon: 'gamepad-alt' },
      { id: Tags.Easy, text: 'Easy', colour: '', iconColour: '#BEF264', iconSecondaryColour: '#EF4444', icon: 'shapes' },
      { id: Tags.Difficult, text: 'Difficult', colour: '', iconColour: '#F9A8D4', iconSecondaryColour: '#EC4899', icon: 'brain' },
      { id: Tags.Television, text: 'Television', colour: '', iconColour: '#713F12', iconSecondaryColour: '#EC4899', icon: 'tv-retro' },
      { id: Tags.History, text: 'History', colour: '', iconColour: '#A8A29E', iconSecondaryColour: '#D6D3D1', icon: 'landmark' },
      { id: Tags.Local, text: 'Local', colour: '', iconColour: '#A8A29E', iconSecondaryColour: '#D6D3D1', icon: 'location-dot' },
    ];

    await Tag.createMany(rawTags);
  }
}
