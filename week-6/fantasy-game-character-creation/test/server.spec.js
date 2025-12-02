const http = require("http");
const server = require("../src/server");

describe("Server", () => {
  afterAll(() => {
    server.close();
  });

  test("responds to /create-character POST request with query parameters", (done) => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/create-character?class=Warrior&gender=Male&funFact=has+red+hair",
      method: "POST",
    };

    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        expect(res.statusCode).toBe(201);
        expect(data).toBe(`Character creation successful`);
        done();
      });
    });
    req.end();
  });

  test("responds to /confirm-character POST request", (done) => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/confirm-character",
      method: "POST",
    };

    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe("Character has been created");
        done();
      });
    });
    req.end();
  });

  test("responds to /view-character GET request", (done) => {
    http.get("http://localhost:3000/view-character", (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        expect(res.statusCode).toBe(200);
        expect(JSON.parse(data)).toStrictEqual(
          (characterQuery = {
            class: "Warrior",
            gender: "Male",
            funFact: "has red hair",
          })
        );
        done();
      });
    });
  });
});
