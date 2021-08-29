const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
// taken from kind strangers on stackoverflow
// https://stackoverflow.com/questions/10049557/reading-all-files-in-a-directory-store-them-in-objects-and-send-the-object
var fs = require('fs');

function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
      fs.readFile(dirname + filename, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}

var data = {};
readFiles('uploadedResponses/', function(filename, content) {
    content = content.split("\n")
    data[content[0]] = content.slice(1, content.length);
}, function(err) {
  throw err;
});



router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get("/user", (req, res) => {
    res.json(data);
});



//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');