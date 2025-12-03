export default function TodoInput({ text, onChange, onAdd }) {
  // 입력 필드와 추가 버튼을 묶은 영역
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="flex-1">
        <label htmlFor="todo-input" className="sr-only">
          할 일 입력
        </label>
        <input
          id="todo-input"
          type="text"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onAdd()}
          placeholder="할 일을 입력하고 Enter"
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base shadow-inner shadow-slate-100 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-200"
        />
      </div>
      <button
        onClick={onAdd}
        className="flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-white"
      >
        추가하기
      </button>
    </div>
  );
}
