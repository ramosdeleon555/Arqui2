const express = require("express")
const cors = require("cors")
const pool = require("./db")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/tasks", async (req,res)=>{
  try {
    const result = await pool.query("SELECT * FROM tasks")
    res.json(result.rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

app.post("/tasks", async (req,res)=>{
  try {
    const { title } = req.body

    const result = await pool.query(
      "INSERT INTO tasks (title) VALUES ($1) RETURNING *",
      [title]
    )

    res.json(result.rows[0])
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
  console.log("Server running")
})