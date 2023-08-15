// // require functions on user
const request = require("supertest");
const mongoose = require('mongoose');
const app = require('./index');

describe(`test endpoints`, () => {    

  beforeEach(async () => {
    await mongoose.connect(process.env.MONGURI);
  });

  afterEach(async () => {
    await mongoose.connection.close();
  });

  test(`Call entrypoint`, async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200)
    expect(res.text).toBe('This app is running properly')
  });

  test(`Call /getUser endpoint`, async () => {
    const res = await request(app).get("/getUser/test").send();
    expect(res.status).toBe(200)
    expect((res) => {
      res.body.status = 200;
    })
  });

  test(`Call /getUsers endpoint`, async () => {
    const res = await request(app).get("/getUsers").send();
    expect(res.status).toBe(200)
    expect((res) => {
      res.body.status = 200;
    })
  });
    
  test(`Call /addUser endpoint`, async () => {
    const res = await request(app).post("/addUser");
    expect(res.status).toBe(200)
    expect((res) => {
      res.body.status = 200;
    })
  });

});

