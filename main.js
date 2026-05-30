import express from "express"

const app = express()

app.use("/", express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const PORT = 3333

app.listen(PORT, () => console.log(`Servidor funcionando en http://localhost:${PORT}`))