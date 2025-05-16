import "./App.css";
import { useState } from "react";

function Table({ taskList, deleteTask, completeTask }) {
    let strikeOff = (isDone) => {
        return isDone ? { textDecoration: "line-through", backgroundColor: "green", color: "white", fontWeight:"bold" } : {};
    };
  const todosTable = taskList.map(todo => (
    <tr key={todo.key}>
      <th scope="row">{todo.key}</th>
      <td style={strikeOff(todo.isDone)}>{todo.task}</td>
      <td>
        <button onClick={()=> deleteTask(todo.key)}>
          <i className="bi bi-x-octagon-fill"></i>
        </button>
      </td>
      <td>
        <button onClick={()=> completeTask(todo.key)}>
          <i className="bi bi-check-circle-fill"></i>
        </button>
      </td>
    </tr>
  ));

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tasks</th>
          <th scope="col">Delete</th>
          <th scope="col">Mark it as complete</th>
        </tr>
      </thead>
      <tbody>{todosTable}</tbody>
    </table>
  );
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([{ key: 0, task: "sampletask", isDone: false }]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    if (inputValue === "") {
        return
    };
    const newTask = {
      key: todos.length,
      task: inputValue,
      isDone: false,
    };
    setTodos(prevTodos => [...prevTodos, newTask]);
    setInputValue("");
  };
  const handleDelete = (key) => {
    let newTodoList = todos.filter(todo => todo.key !== key);
    setTodos(newTodoList);
  }
  const handleComplete = (key) => {
  const updatedTodos = todos.map(todo => 
    todo.key === key ? { ...todo, isDone: true } : todo
  );
  setTodos(updatedTodos);
};

  return (
    <div className="contentbox">
      <div>
        <input
          placeholder="Type something here...."
          className="input"
          value={inputValue}
          type="text"
          onChange={handleChange}
        />
        <span>
          <button onClick={handleAdd}>
            <i className="bi bi-plus-circle-fill"></i> Add
          </button>
        </span>
      </div>

      <div className="card shadow">
        <h2>ToDo List</h2>
        <Table taskList={todos} deleteTask={handleDelete} completeTask={handleComplete} />
      </div>
    </div>
  );
}

export default App;
