import express, { Request, Response } from "express"
import "dotenv/config"

const mysql = require('mysql')
const app = express()
const dotenv = process.env
const port = dotenv.PORT || 3000

const dataBase = mysql.createPool({
  host: dotenv.HOST,
  user: dotenv.USER,
  password: dotenv.PASSWORD,
  database: dotenv.DATABASE,
})

app.use('/', (req: Request, res: Response) => {
  res.send('hello word')
})

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))