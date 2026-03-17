const express = require("express")
const cors = require("cors")
const swaggerUi = require("swagger-ui-express")
const pool = require("./db")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/tasks", async (req,res)=>{
  const result = await pool.query("SELECT * FROM tasks")
  res.json(result.rows)
})

app.post("/tasks", async (req,res)=>{
  const { title } = req.body

  const result = await pool.query(
    "INSERT INTO tasks (title) VALUES ($1) RETURNING *",
    [title]
  )

  res.json(result.rows[0])
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
  console.log("Server running")
})