import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { DateTime } from 'luxon';
import { nextTuesday, subWeeks, setMinutes, setHours, format } from 'date-fns';
import { Company, EventStatuses } from 'App/Models';

export default class EventSeeder extends BaseSeeder {
  public async run() {
    const company = await Company.findOrFail('c7c3c627-322f-41fc-a483-957428f79f5b');

    const tues3 = setMinutes(nextTuesday(new Date()), 0);
    const tues2 = subWeeks(tues3, 1);
    const tues1 = subWeeks(tues3, 2);

    const seriesData = [
      {
        name: 'Sportsman Tuesday Trivia',
        description: 'Trivia every Tuesday night from 8pm at Sportsman Bar, Sukhumvit Soi 13',
        events: [
          {
            description: `Tuesday Night Trivia - ${format(tues1, 'MMMM do')}`,
            startTime: DateTime.fromJSDate(setHours(tues1, 19)),
            endTime: DateTime.fromJSDate(setHours(tues1, 21)),
            status: EventStatuses.Published,
          },
          {
            description: `Tuesday Night Trivia - ${format(tues2, 'MMMM do')}`,
            startTime: DateTime.fromJSDate(setHours(tues2, 19)),
            endTime: DateTime.fromJSDate(setHours(tues2, 21)),
            status: EventStatuses.Published,
          },
          {
            description: `Tuesday Night Trivia - ${format(tues3, 'MMMM do')}`,
            startTime: DateTime.fromJSDate(setHours(tues3, 19)),
            endTime: DateTime.fromJSDate(setHours(tues3, 21)),
            status: EventStatuses.Draft,
          },
        ],
      },
    ];

    for (const rawSeries of seriesData) {
      const series = await company.related('series').create(rawSeries);
      await series.related('events').createMany(rawSeries.events);
    }
  }
}
