require("dotenv").config()
const http = require("http")
const app = require("./src/config/express.config")
const PORT = Number(process.env.PORT || 8000)
const server = http.createServer(app)

server.listen(PORT, 'localhost', (err) => {
    if (!err) {
        console.log(`Application Running ${PORT}`)
    }
})
