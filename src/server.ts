import express, { Request, Response } from "express"
const app = express()
const port = 8080

//parse
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Gari Lagba API')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
