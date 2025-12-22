import { MdAutoDelete } from "react-icons/md";
function Todoitem({todoName , todoDate, onDeleteClick}){

    // let todoName = "Buy Milk";
    // let todoDate = "4/10/2025";

    return <div class="container">
        <div class="row kg-row">
    <div class="col-6">
     {todoName}
    </div>
    <div class="col-4">
     {todoDate}
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-danger kg-button" onClick={() =>onDeleteClick(todoName)}><MdAutoDelete/></button>
    </div>
  </div>
  </div>
}
export default Todoitem;