const express = require('express');
const app = express();
var bodyParser = require("body-parser");

var questions = [1, 3, 1, 2];

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/check/:id/:asw',function (req,res) {

  var id = req.params.id.slice(1);
  var asw = req.params.asw.slice(1);

  if (id - 1 < 0 || id - 1 > 3){
    var obj = JSON.parse('{ "check":"undefined"}');
    res.send(obj);
    return;
  }

  if (questions[id-1] === asw){
    var obj = JSON.parse('{ "check":"true"}');
    res.send(obj);
  } else {
    var obj = JSON.parse('{ "check":"false"}');
    res.send(obj);
  }
});

app.post('/test', function (req, res) {
  res.send('POST request to the homepage');
  console.log(JSON.stringify(req.body));
});

app.listen(8080);




