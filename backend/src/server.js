const express = require("express")
const cors = require("cors")

const swaggerUi = require("swagger-ui-express")

const app = express()

app.use(cors())
app.use(express.json())

let tasks = []

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Tasks API",
    version: "1.0.0"
  },
  paths: {
    "/tasks": {
      get: {
        summary: "Get tasks",
        responses: {
          "200": { description: "OK" }
        }
      }
    }
  }
}

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get("/tasks",(req,res)=>{
  res.json(tasks)
})

app.listen(3000,()=>{
  console.log("Server running on port 3000")
})