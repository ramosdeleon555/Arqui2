import { useState, useEffect } from "react"

function App() {

  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState("")

  const API = "http://localhost:3000"

  const getTasks = async () => {
    const res = await fetch(API + "/tasks")
    const data = await res.json()
    setTasks(data)
  }

  const createTask = async () => {
    await fetch(API + "/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title })
    })

    setTitle("")
    getTasks()
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <div style={{padding:"40px"}}>

      <h1>Lista de tareas</h1>

      <input
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />

      <button onClick={createTask}>
        Agregar
      </button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App