import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"
import errorHandler from "./utils/errorHandler"
import userRoutes from "./routes/user.route"
import postRoutes from "./routes/post.route"
import commentRoutes from "./routes/comment.route"
import ratingsRoutes from "./routes/rating.route"
import authRoutes from "./routes/auth.route"

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.get("/", (req, res) => {
    res.send("Server works.")
})

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}))

app.use("/users", userRoutes)
app.use("/posts", postRoutes)
app.use("/comments", commentRoutes)
app.use("/ratings", ratingsRoutes)
app.use("/auth", authRoutes)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server works on port ${port}`)
})