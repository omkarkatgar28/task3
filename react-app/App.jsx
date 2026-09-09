import { useState } from 'react'
import TaskList from './TaskList'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task.trim() === '') return

    setTasks([
      ...tasks,
      {
        text: task,
        completed: false,
      },
    ])

    setTask('')
  }

  const completeTask = (index) => {
    const updatedTasks = [...tasks]

    updatedTasks[index].completed =
      !updatedTasks[index].completed

    setTasks(updatedTasks)
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  const completedCount = tasks.filter(
    (item) => item.completed
  ).length

  const pendingCount = tasks.length - completedCount

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow">

        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          My Task Tracker
        </h1>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 rounded border p-2"
          />

          <button
            onClick={addTask}
            className="rounded bg-blue-600 px-4 py-2 text-white"
          >
            Add Task
          </button>
        </div>

        <div className="mt-5 flex justify-between rounded-lg bg-gray-50 p-3">
          <span>
            Total: <b>{tasks.length}</b>
          </span>

          <span>
            Pending: <b>{pendingCount}</b>
          </span>

          <span>
            Completed: <b>{completedCount}</b>
          </span>
        </div>

        <TaskList
          tasks={tasks}
          onComplete={completeTask}
          onDelete={deleteTask}
        />

      </div>
    </div>
  )
}

export default App