var gtts = require('node-gtts')('en');
var path = require('path');
var cors = require('cors');
var filepath = path.join(__dirname, 'i-love-you.wav');
 
/*gtts.save(filepath, 'Hi Abhay', function() {
  console.log('save done');
})*/

var express = require('express');
const app = express();
app.use(cors({
    origin: "localhost:3000",
}));
var router = express.Router();
var gtts = require('node-gtts')('en');
 
router.get('/speech', function(req, res) {
  res.set({'Content-Type': 'audio/mpeg'});
  gtts.stream(req.query.text).pipe(res);
})


var gtts = require('node-gtts')('en');
gtts.createServer(8668);