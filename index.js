var express = require("express");
var app = express();
var fs = require("fs");
var convert = require("color-convert");
const port = 3000;

const request = function(req, res, next) {
  app.get("/convert/keywordtorgb", (req, res) => {
    const color = req.query.color;
    const color2 = convert.keyword.rgb(color);
    return res.send({ color2 });
  });
  next();
};

app.use(request);

const obj = { statistics: [] };
obj.statistics.push({ colorStatistics: "1" });
const string = JSON.stringify(obj);
fs.writeFile("./statistic.json", string);

app.get("/convert/rgbtohsl", (req, res) => {
  const { r, g, b } = req.query;
  const colorrgb2 = convert.rgb.hsl(r, g, b);
  return res.send({ colorrgb2 });
});

app.get("/convert/rgbtohex", (req, res) => {
  const { r, g, b } = req.query;
  const colorrgb2 = convert.rgb.hex(r, g, b);
  return res.send({ colorrgb2 });
});

app.get("/convert/hextorgb", (req, res) => {
  const colorhex = req.query.hex;
  const colorhex2 = convert.hex.rgb(colorhex);
  return res.send({ colorhex2 });
});

app.listen(port, () => console.log("I'M HERE HOHOOO"));
