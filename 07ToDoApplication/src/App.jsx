import { TodoProvider } from "./context"

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, {id: Date.now(), ...todo}]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((oldTodo) => (oldTodo.id === id? todo : oldTodo)),
    );
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id!== id));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id? {...todo, completed:!todo.completed} : todo))
    );
  }

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
