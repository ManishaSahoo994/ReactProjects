import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import Todoitems from "./components/Todoitems";
import "./App.css";
import { useState } from "react";

function App() {

  const initialTodoItems = [{
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

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
  console.log(`New item added: ${itemName} Date:${itemDueDate}`);
  const newTodoItems = [...todoItems, {name: itemName, dueDate: itemDueDate}];
  setTodoItems(newTodoItems);
  }

  return (<center
  class='todo-container'>
    <AppName></AppName>
    <AddTodo onNewItem = {handleNewItem}></AddTodo>
    <Todoitems todoItems={todoItems}></Todoitems>
  </center>
  );
};

export default App;
