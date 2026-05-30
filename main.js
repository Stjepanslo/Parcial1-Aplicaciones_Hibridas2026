import express from "express"
import projectRoutes from "./routes/projects.routes.js"

const app = express()

app.use("/", express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use(projectRoutes)

const PORT = 3333

app.listen(PORT, () => console.log(`Servidor funcionando en http://localhost:${PORT}`))