import express from 'express'
import { PrismaClient } from '@prisma/client'
const app = express()
const port = 3000;

app.use(express.json())

const prisma = new PrismaClient()

app.get('/', async (req, res) => {
  const data = await prisma.user.findMany()
  res.send(data)
})

app.post('/register', async (req, res) => {
  const data = await prisma.user.create({
    select: {
      email: true,
      username: true,
    },
    data: {
      email: req.body.email,
      username: req.body.username,
    },
  })
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
