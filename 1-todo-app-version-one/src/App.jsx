import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import Todoitems from "./components/Todoitems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {


  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
  console.log(`New item added: ${itemName} Date:${itemDueDate}`);
  const newTodoItems = [...todoItems, {name: itemName, dueDate: itemDueDate}];
  setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }

  return (<center
  class='todo-container'>
    <AppName></AppName>
    <AddTodo onNewItem = {handleNewItem}></AddTodo>
    {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
    <Todoitems todoItems={todoItems} onDeleteClick={handleDeleteItem}></Todoitems>
  </center>
  );
};

export default App;
