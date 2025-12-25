import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({onNewItem}){

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
  // console.log(event.target.value);
   setTodoName(event.target.value);
  }
  const handleDateChange = (event) => {
   setDueDate(event.target.value);
  }

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate(""); 
  }

return  <div classNameName="container text-center">
  <div classNameName="row kg-row">
    <div classNameName="col-6">
     <input type="text" placeholder="Enter Todo here" value={todoName} onChange={handleNameChange}/>
    </div>
    <div classNameName="col-4">
      <input type="date" value={dueDate} onChange={handleDateChange}/>
    </div>
    <div classNameName="col-2">
      <button type="button" classNameName="btn btn-success kg-button" onClick ={handleAddButtonClicked}><IoMdAddCircle/></button>
    </div>
  </div>
  </div>
}
export default AddTodo;