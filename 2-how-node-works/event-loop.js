const fs = require("fs")
const crypto = require("crypto") // For encryption

const start = Date.now()
process.env.UV_THREADPOOL_SIZE = 4; // The threadpool number

setTimeout(() => console.log("Set timeout finished"), 0)

setImmediate(() => console.log("Set Immediate finished"))

fs.readFile("./test-file.txt", () => {
    console.log("Reading file finished")

    console.log("------------------")

    setTimeout(() => console.log("Set timeout2 finished"), 0)
    setTimeout(() => console.log("Set timeout3 finished"), 3000)


    setImmediate(() => console.log("Set Immediate2 finished"))
    process.nextTick(() => console.log("next tick function finished"))

    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, "password encrypted")
    })
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, "password encrypted")
    })
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, "password encrypted")
    })
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, "password encrypted")
    })
})

console.log("Top level code finished...")