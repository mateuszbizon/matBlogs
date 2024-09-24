import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import errorHandler from "./utils/errorHandler"
import userRoutes from "./routes/user.route"

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.get("/", (req, res) => {
    res.send("Server works.")
})

app.use(bodyParser.json())

app.use("/users", userRoutes)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server works on port ${port}`)
})