import express from "express"
import compression from "compression"
import cors from "cors"
import folder from "./routes/folder/folder.js"
import note from "./routes/note/note.js"
import dbConnection from "./db/connection.js"

const PORT = process.env.PORT || 5050
const app = express()

app.use(compression())
app.use(cors())
app.use(express.json())

app.use("/folder", folder)
app.use("/note", note)

dbConnection()
app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`) })