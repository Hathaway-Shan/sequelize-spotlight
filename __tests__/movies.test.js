const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');


describe('movie routes', () => {
  beforeEach(async () => {
    try {
      await db.Genre.bulkCreate([
        {
          type: 'Action',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Comedy',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
      
      await db.Movie.bulkCreate([
        {
          title: 'Actiony film',
          description: 'sucks',
          image: '101010101',
          releaseYear: 1987,
          genre_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Comedy film',
          description: 'sucks',
          image: '101010101',
          releaseYear: 1985,
          genre_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]);
    } catch (e) {
      console.log(e);
    }
  });
  afterAll(async () => {
    await db.sequelize.close();
  });
  
  it('#GET /api/v1/movies should return a list of movies', async () => {
    const resp = await request(app).get('/api/v1/movies');
    console.log(resp.body);
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(2);
  });
});
