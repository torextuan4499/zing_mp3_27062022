import express, { Request, Response } from "express"

const app = express()
const port = 3000

app.use('/', (req: Request, res: Response) => {
  res.send('hello word')
})

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))