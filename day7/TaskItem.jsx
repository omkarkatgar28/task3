```jsx
function TaskItem({ task, index, onComplete, onDelete }) {
  return (
    <li className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-lg transition hover:border-indigo-400/30">

      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onComplete(index)}
        className="h-5 w-5 cursor-pointer accent-indigo-500"
      />

      <div className="min-w-0 flex-1">

        <p
          className={
            task.completed
              ? "break-words font-medium text-slate-500 line-through"
              : "break-words font-medium text-white"
          }
        >
          {task.text}
        </p>

        <p className="mt-2 text-xs text-slate-500">
          📅 {task.date}
          <span className="mx-2">•</span>
          🕒 {task.time}
        </p>

      </div>

      <button
        onClick={() => onDelete(index)}
        className="rounded-xl border border-red-400/20 bg-red-500/10 px-3 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-500 hover:text-white"
      >
        Delete
      </button>

    </li>
  );
}

export default TaskItem;
```
