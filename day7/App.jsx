```jsx
import { useState, useEffect } from "react";
import TaskList from "./TaskList";

function App() {
  const [taskText, setTaskText] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const addTask = () => {
    if (taskText.trim() === "") return;

    const now = new Date();

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      date: now.toLocaleDateString("en-GB"),
      time: now.toLocaleTimeString("en-GB"),
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingCount = tasks.filter(
    (task) => !task.completed
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 px-4 py-10">

      <div className="mx-auto w-full max-w-2xl">

        <div className="mb-6 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
            Productivity
          </p>

          <h1 className="text-4xl font-extrabold text-white">
            My Task Tracker
          </h1>

          <p className="mt-2 text-slate-400">
            Organize your tasks and stay productive.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">

          <div className="mb-6 rounded-2xl border border-indigo-400/20 bg-indigo-500/10 p-4 text-center">
            <p className="text-lg font-semibold text-indigo-200">
              📅 {currentDateTime.toLocaleDateString("en-GB")}
            </p>

            <p className="mt-1 text-xl font-bold text-white">
              🕒 {currentDateTime.toLocaleTimeString("en-GB")}
            </p>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="What do you need to do?"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTask();
                }
              }}
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
            />

            <button
              onClick={addTask}
              className="rounded-xl bg-indigo-500 px-5 py-3 font-semibold text-white transition hover:bg-indigo-400 active:scale-95"
            >
              Add
            </button>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">

            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4">
              <p className="text-sm text-emerald-300">
                Completed
              </p>

              <p className="mt-1 text-2xl font-bold text-white">
                {completedCount}
              </p>
            </div>

            <div className="rounded-2xl border border-amber-400/20 bg-amber-500/10 p-4">
              <p className="text-sm text-amber-300">
                Pending
              </p>

              <p className="mt-1 text-2xl font-bold text-white">
                {pendingCount}
              </p>
            </div>

          </div>

          <TaskList
            tasks={tasks}
            onComplete={toggleTask}
            onDelete={deleteTask}
          />

          {tasks.length === 0 && (
            <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
              <p className="text-3xl">📝</p>

              <p className="mt-2 font-semibold text-slate-300">
                No tasks yet
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Add your first task above.
              </p>
            </div>
          )}

        </div>

        <p className="mt-5 text-center text-sm text-slate-500">
          Stay focused • Complete your goals 🚀
        </p>

      </div>
    </div>
  );
}

export default App;
```
