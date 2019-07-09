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

// /convert/rgbtohex/
// /convert/hextorgb/

// http://localhost:3000/convert/keywordtorgb?color=hotpink

app.listen(port, () => console.log("I'M HERE HOHOOO"));
