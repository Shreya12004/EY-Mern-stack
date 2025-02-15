// server.mjs
// import { createServer } from 'node:http';

var http=require('http')

const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('{"id":1,"price":"200","title":"school bag"}');
    if(req=="/"){
        res.write("this is a default page");
        res.end();
    }


    if(req=="/"){
        res.write("this is product page");
        res.end({
            "store": {
              "name": "Casual Charm",
              "type": "clothing",
              "focus": "dresses"
            }
          }
          );
    }

    if(req=="/"){
        res.write("this is a user page");
        res.end({
            "user": {
              "id": 1,
              "name": "John Doe",
              "email": "john.doe@example.com",
              "age": 30,
              "isActive": true,
              "preferences": {
                "language": "English",
                "theme": "dark"
              }
            }
          }
          );
    }


    if(req=="/"){
        res.write("this is a default page");
        res.end();
    }
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
