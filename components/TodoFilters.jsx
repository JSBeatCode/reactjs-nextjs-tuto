const filters = [
  { key: "all", label: "전체" },
  { key: "active", label: "진행중" },
  { key: "completed", label: "완료" },
];

export default function TodoFilters({
  filter,
  setFilter,
  activeCount,
  hasCompleted,
  clearCompleted,
}) {
  // 필터 버튼, 남은 개수, 완료 목록 비우기를 제공
  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-2">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              filter === key
                ? "bg-indigo-600 text-white shadow-sm shadow-indigo-200"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3 text-sm text-slate-600">
        <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">
          남은 일: {activeCount}
        </span>
        {hasCompleted && (
          <button
            onClick={clearCompleted}
            className="text-indigo-600 underline underline-offset-4 hover:text-indigo-500"
          >
            완료 항목 비우기
          </button>
        )}
      </div>
    </div>
  );
}
