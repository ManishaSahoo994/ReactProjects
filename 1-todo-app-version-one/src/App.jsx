import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import Todoitems from "./components/Todoitems";
import "./App.css";

function App() {

  const todoItems = [{
    name: "Buy Milk",
    dueDate: "4/10/2025"
  },
{
    name: "Go to College",
    dueDate: "4/10/2025"
  },
{
    name: "like this",
    dueDate: "right now"
  }];

  return (<center
  class='todo-container'>
    <AppName></AppName>
    <AddTodo></AddTodo>
    <Todoitems todoItems={todoItems}></Todoitems>
  </center>
  );
};

export default App;
