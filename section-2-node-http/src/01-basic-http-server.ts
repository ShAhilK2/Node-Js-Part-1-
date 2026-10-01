
import http, { type IncomingMessage, type ServerResponse } from "http";


const PORT = 3000;

// http.createServer  create low level http server

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {


    const method = req.method;

    // Get => read data
    // Put => update data
    // patch => update  partial data
    // post => create data
    // delete => delete data


    const url = req.url;

    // in which the client is actually requesting 

    const userAgent = req.headers["user-agent"];



    
    res.statusCode = 200
    // set http status Code
    //  201 => created
    //  404 
    //  429
    //  401
    //  200

    res.setHeader("Content-Type","text/plain")



    res.end(`Basic http node server : ${method} : ${url} : ${userAgent}`)


    // req request object
    // req.headers => actual metadata send by the client 
    // req.method => GET, POST, PUT, DELETE
    // req.url => URL of the request


    // res response object
    // res.writeHead => set status code and headers
    // res.end => send response

});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});