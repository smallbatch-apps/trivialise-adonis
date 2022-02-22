import test from 'japa';
import supertest from 'supertest';

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`;

test.group('Check basic healthcheck connection', () => {
  test('It can connect to the API', async (assert) => {
    const response = await supertest(BASE_URL).get('/health').expect(200);
    assert.isTrue(response.body.healthy);
  });
});
