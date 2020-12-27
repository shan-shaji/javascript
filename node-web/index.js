const fs = require("fs");
const http = require("http");
const { type } = require("os");
const url = require("url");
const replaceTemplate = require(`./modules/replaceTemplate`)


const tempOverView = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(`${__dirname}/templates/card.html`, "utf-8");
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  "utf-8"
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const objectData = JSON.parse(data);

const server = http.createServer((req, res) => {
  const {query, pathname} = url.parse(req.url);


  // overview page
  if (pathname == "/overview" || pathname == "/") {
    const cardsHtml = objectData
      .map((element) => {
        return replaceTemplate(tempCard, element);
      })
      .join("");

    const output = tempOverView.replace("{%PRODUCT_CARDS%}", cardsHtml);
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(output);

    // product page
  } else if (pathname == "/product") {
    const product = objectData[query.split("=")[1]];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
    // api
  } else if (pathname == "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  }

  // page not found
  else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-on-header": "Hello-World",
    });
    res.end("Page Not Found!");
  }
});

server.listen(8000, "localhost", () => {
  console.log("listeneing to port 8000");
});

////////////////////////////////////////////////////////////////////

//  const textIn = fs.readFileSync('./txt/input.txt', "utf8");
// fs.readFile("./txt/start.txt","utf-8", (err, data) => {
//     fs.readFile(`./txt/${data}.txt`, "utf-8", (err, data) => {
//         console.log(data);
//         fs.readFile("./txt/append.txt", "utf-8", (err, data) => {
//             fs.writeFile("./txt/final.txt", `${data}\n${data}`, 'utf-8', err => {
//                 console.log("file written");
//             })
//         })
//     });
// });

// console.log("i printed first");
