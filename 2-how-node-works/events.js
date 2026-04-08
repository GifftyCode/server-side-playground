const EventEmitter = require("events")
const http = require("http")

// class customer extends EventEmitter() {
//     constructor() {
//         super()
//     }
// }

// const customerEmitter = new customer()

const myEmitter = new EventEmitter()

myEmitter.on("newSale", () => {
    console.log("New sale alert!!");
    
})
myEmitter.on("newSale", () => {
    console.log("Customer name: Giffty")
})
myEmitter.on("newSale", stock => {
    console.log(`There are ${stock} items left in stock`)
})

myEmitter.emit("newSale", 9)



/////////////////////////////////////////////////////////////////////
const server = http.createServer()
server.on("request", (req, res) => {
    console.log("Request received")
    res.write("Request received!!!")
})

server.on("request", (req, res) => {
    res.end("Another Request...")
})

server.on("close", () => {
    res.end("Server closed")
})

server.listen(8000, '127.0.0.1', () => {
    console.log("Waiting for requests...")
})