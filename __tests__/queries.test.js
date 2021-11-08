const { stopDatabase } = require("../src/database");
const request = require('supertest');
const app = require("../src/server");

afterAll(async () => {
  await stopDatabase();
});

describe('UserResolver', () => {
  it("users", (done) => {
    request(app)
      .post("/graphql")
      .send({
        query: "{ users{ id, name} }",
      })
      .set("Accept", "application/json")
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body).toBeInstanceOf(Object);
        expect(res.body.data.users.length).toEqual(2);
        done();
      });
  });
});
