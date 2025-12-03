import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete }) {
  // 비어 있을 때 안내 메시지
  if (todos.length === 0) {
    return (
      <ul className="mt-6 space-y-3">
        <li className="flex items-center justify-between rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-sm text-slate-500">
          아직 할 일이 없습니다. 새로운 할 일을 추가해보세요.
        </li>
      </ul>
    );
  }

  // todo 목록 렌더링
  return (
    <ul className="mt-6 space-y-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
