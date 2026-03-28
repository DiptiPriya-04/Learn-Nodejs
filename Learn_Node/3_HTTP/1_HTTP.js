/*
 * HTTP PROTOCOL — THEORY + CODE
 * ============================
 *
 * HTTP (HyperText Transfer Protocol) is the foundation of data communication on the web.
 * It defines how messages are formatted and transmitted, and how servers and browsers
 * should respond to different requests.
 *
 * ✅ Key Points:
 *  - Works on the client-server model.
 *  - Uses TCP (Transmission Control Protocol) underneath (default port: 80, HTTPS uses 443).
 *  - Stateless protocol (each request is independent; server does not remember past requests).
 *
 * ============================
 * HTTP METHODS
 * ============================
 * These specify the type of operation the client wants the server to perform.
 *
 * 1. GET     -> Retrieve data from the server (no body in request).
 * 2. POST    -> Send data to the server (often for creating new records).
 * 3. PUT     -> Update an existing resource completely.
 * 4. PATCH   -> Update part of an existing resource.
 * 5. DELETE  -> Remove a resource from the server.
 * 6. HEAD    -> Same as GET but without the response body (used for metadata).
 * 7. OPTIONS -> Ask the server what methods are supported for a resource.
 *
 * ============================
 * HTTP STATUS CODES
 * ============================
 * These are 3-digit numbers sent by the server to indicate the result of a request.
 *
 * Categories:
 *  1xx -> Informational responses
 *    - 100 Continue: Request received, continue.
 *
 *  2xx -> Success
 *    - 200 OK: Request successful.
 *    - 201 Created: Resource created successfully.
 *    - 204 No Content: Request successful but no data returned.
 *
 *  3xx -> Redirection
 *    - 301 Moved Permanently: Resource moved to a new URL.
 *    - 302 Found: Temporary redirect.
 *    - 304 Not Modified: Resource not changed since last request.
 *
 *  4xx -> Client errors
 *    - 400 Bad Request: Invalid request syntax or data.
 *    - 401 Unauthorized: Authentication required.
 *    - 403 Forbidden: Access denied.
 *    - 404 Not Found: Resource doesn't exist.
 *
 *  5xx -> Server errors
 *    - 500 Internal Server Error: Generic server crash.
 *    - 502 Bad Gateway: Invalid response from upstream server.
 *    - 503 Service Unavailable: Server overloaded or down.
 */


// const http = require('http');
// const server = http.createServer((req, res) => {
//     // Handle requests here
//     console.log('i got the incoming request');
//     res.writeHead(200)//success status code
//     res.end(`hey u can accept ${req.headers['accept-language']}`)

// });

// server.listen(8000 , function(){
//     console.log(`http server is up and runing on port 8000`);
// })

//What is Port ?
// -> A port is a communication endpoint in a computer's operating system. In the context of HTTP.
//  it specifies the destination port where the server listens for incoming requests. 
// The default port for HTTP is 80, and for HTTPS it is 443.

// http - hypertext transfer protocol (scheme used for communication on the web)
// https: - hypertext transfer protocol secure (uses SSL/TLS for encryption)
//http://www->subdomain .goggle ->naked domain .com ->tld (top level domain) /search(ex:- contact us ) -> path? q =xyz&sort=desc -> query parameters 


// incoming request we have 2 main things
// 1. req (request) -> contains information about the incoming request, such as the URL, method, headers, and body.
// 2. res (response) -> used to send a response back to the client, including status code, headers, and body.

//instead of direct run we can change the package.json file and add a script to run the server
// "scripts": {
//     "start": "node 1_HTTP.js"
//   },

const http = require('http');
 
const server = http.createServer(function (req, res) {
    console.log(req.url);

switch(req.url){
    case '/':
        return  res.end(`Homepage`);
    case '/contact us ':
        return  res.end(`conatct me at diptipriyabgp7@gmail.com`);
    default:
        res.writeHead(404);
        return res.end(`You are lost`);
}
});