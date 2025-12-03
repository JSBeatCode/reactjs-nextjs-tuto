export default function TodoItem({ todo, onToggle, onDelete }) {
  // 개별 todo 항목(체크박스 + 본문 + 삭제 버튼)
  return (
    <li className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm shadow-slate-200/60 transition hover:-translate-y-[1px] hover:shadow">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
        aria-label="완료 전환"
      />
      <div className="flex flex-1 items-center justify-between gap-3">
        <div>
          <p
            className={`text-base font-medium ${
              todo.completed ? "text-slate-400 line-through" : "text-slate-800"
            }`}
          >
            {todo.text}
          </p>
          <p className="text-xs text-slate-400">
            {new Date(todo.createdAt).toLocaleString()}
          </p>
        </div>
        <button
          onClick={() => onDelete(todo.id)}
          className="rounded-lg px-2 py-1 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
        >
          삭제
        </button>
      </div>
    </li>
  );
}
