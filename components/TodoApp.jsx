import { useEffect, useMemo, useState } from "react";
import TodoFilters from "./TodoFilters";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  // 첫 마운트 시 로컬스토리지에 저장된 목록을 복구
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("todos") : null;
    if (stored) {
      try {
        setTodos(JSON.parse(stored));
      } catch (error) {
        console.error("Failed to parse todos", error);
      }
    }
  }, []);

  // todos가 변경될 때마다 로컬스토리지에 동기화
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 필터 상태에 맞게 렌더링할 목록 계산
  const filteredTodos = useMemo(() => {
    if (filter === "active") return todos.filter((todo) => !todo.completed);
    if (filter === "completed") return todos.filter((todo) => todo.completed);
    return todos;
  }, [todos, filter]);

  // 새로운 todo 추가
  const handleAdd = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: trimmed,
        completed: false,
        createdAt: Date.now(),
      },
    ]);
    setText("");
  };

  // 완료 상태 토글
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // todo 삭제
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // 완료된 todo 일괄 삭제
  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const hasCompleted = todos.some((todo) => todo.completed);
  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <section className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200">
      <TodoInput text={text} onChange={setText} onAdd={handleAdd} />
      <TodoFilters
        filter={filter}
        setFilter={setFilter}
        activeCount={activeCount}
        hasCompleted={hasCompleted}
        clearCompleted={clearCompleted}
      />
      <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </section>
  );
}
