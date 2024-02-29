const http = require("http");
const products = require("./data.json");
const port = 4000;
const host = "127.0.0.1";

const handleRequest = (request, response) => {
  if (request.url === "/" && request.method === "GET") {
    response.writeHead(200, { "Content-type": "text/plain" });
    response.end("you server in on ");
  }
  if (request.url === "/products" && request.method === "GET") {
    response.writeHead(200, { "Content-type": "application/json" });
    response.end(JSON.stringify(products));
  } else if (request.url === "/products" && request.method === "POST") {
    let body = "";
    request
      .on("data", chunk => {
        console.log(chunk, "this is chunk");
        body += chunk;
      }).on("end", () => {
        response.writeHead(201, { "Content-type": "application/json" });
        products.push(JSON.parse(body));
        response.end(JSON.stringify(products));
      })
  }
  else {
    response.writeHead(404, { "Content-type": "text/html" });
    response.end(`
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Not found</title>
  </head>
  <body>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzrBrtQcijxEt-QpZtbwUxBJ9UU1MDsdB1GvvROLIBlc0Ov3ETBKu_o4PFJfeFx1x-Vqw&usqp=CAU"
      alt=""
    />
  </body>
</html>
    `)

  }
};
const server = http.createServer(handleRequest);

server.listen(port, host, () => {
  console.log(`your server is listening to http:// ${host}:${port}`);
});
