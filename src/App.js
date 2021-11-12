import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TotalCompletedItem from './components/TotalCompletedItem';

function App() {
  return (
    <div className="container bg-light p-4 mt-5">
      <div className="row">
        <div className="col-lg-10">
          <h2>My Todo App</h2>
          <AddTodo />
          <TodoList />
          <TotalCompletedItem />
        </div>
      </div>

    </div>
  );
}

export default App;
