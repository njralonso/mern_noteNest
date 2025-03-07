import express from "express"
import cors from "cors"
import records from "./routes/records.js"
import dbConnection from "./db/connection.js"

const PORT = process.env.PORT || 5050
const app = express()

app.use(cors())
app.use(express.json())
app.use("/record", records)
dbConnection()

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`) })