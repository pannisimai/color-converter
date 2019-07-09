var express = require("express");
var app = express();
var convert = require("color-convert");
const port = 3000;

app.get("/convert/keywordtorgb", (req, res) => {
  const color = req.query.color;
  const color2 = convert.keyword.rgb(color);
  return res.send({ color2 });
});

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
