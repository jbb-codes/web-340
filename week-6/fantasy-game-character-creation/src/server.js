const http = require("http");
const url = require("url");

let characterData;

const server = http.createServer((req, res) => {
  const parsedURL = url.parse(req.url, true);
  const pathname = parsedURL.pathname;
  const query = parsedURL.query;

  if (pathname === "/create-character" && req.method === "POST") {
    characterData = {
      class: query.class,
      gender: query.gender,
      funFact: query.funFact,
    };

    res.writeHead(201);
    res.end(`Character creation successful`);
  } else if (pathname === "/confirm-character" && req.method === "POST") {
    res.writeHead(200);
    res.end("Character has been created");
  } else if (pathname === "/view-character" && req.method === "GET") {
    res.writeHead(200);
    res.end(JSON.stringify(characterData));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

module.exports = server;
