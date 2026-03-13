const http = require("http")
const url = require("url")

// Create a server
// const server = http.createServer((req, res) => {
//     res.end("Hello from server...")
// })
// // Listen to income request from a client
// server.listen(8000, "127.0.0.1", () => {
//     console.log("Listening to requests on port 8000")
// } )

//Routing 
const routingServer = http.createServer((req, res) => {
    const pathName = req.url
    if(pathName === "/" || pathName === "/overview") {
        res.end("This is the Overview page.... ")
    } else if(pathName === "/product") {
        res.end("You must buy what am selling eeehhhh...")
    } else {
        res.writeHead(404, {
            "content-type": "text/html",
            "my-own-header": "Hello World!!"
        })
        res.end("<h1>Page not found</h1>")
    }
})

routingServer.listen(8000, "127.0.0.1", () => {
    console.log("Listening to server at port 8000 💃💃")
})