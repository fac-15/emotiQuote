const fs = require('fs');
const path = require('path');


// this is useful
// - make a route for it, it works
// - make a route for the object, or search terms from it
const sampleObjs = require('./data/sample_data.json');

const extensionType = {
  html: 'text/html',
  css: 'text/css',
  js: 'application/javascript',
  ico: 'image/x-ico',
  jpg: 'image/jpeg',
  png: 'image/png'
};



// router function
const router = (request, response) => {
  const url = request.url;
  const method = request.method;
  const extension = url.split('.')[1];

  

  if(method==='GET'){

    if(url === '/') {
      const filePath = path.join(__dirname, '../', 'public', 'index.html');
      fs.readFile(filePath, (error, file) => {
        if(error) {
          console.log(error)
          response.writeHead(500, {'Content-Type':'text/html'})
          response.end('this is an error');
          return;
        } else {
          response.writeHead(200, {'Content-Type':'text/html'})
          response.end(file);
        }
      });
    }
    
    else if (url !== '/') {
      // handeling generic files
      const filePath = path.join(__dirname, '..', 'public', url);
      fs.readFile(filePath, (error, file) => {
        if(error) {
          console.log(error)
          response.writeHead(500, {'Content-Type':'text/html'});
          response.end('this is an error');
          return;
        } else {
          response.writeHead(200, {'Content-Type':`${extensionType[extension]}`});
          // response.send(JSON.stringify({a:1, b:2, c:3}));
          // sampleObjs
          response.end(file);
        }
      });


      


      // get json
      // console.log(sampleObjs[0].text);
      
    }

    // console.log(sampleObjs[1].text);
  }


  console.log(method);
  // console.log(extension);
  console.log(url);
  if (extension === 'json'){
    console.log(sampleObjs[1].text);
  }
  
  
  //else {
    // handling errors
  //}



  // form stuff
  
  // if(method==='POST'){
  //   console.log('form submit');
    
    
  //   request.on('data', function (chunkOfData) {
  //     // get current time
  //     timeStamp = Date.now();
  //     // text from form
  //     allTheData += chunkOfData;
  //   });

  //   request.on('end', function () {
  //   });
  // }

}









module.exports = router;
