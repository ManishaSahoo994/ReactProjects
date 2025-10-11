import Todoitem from "./Todoitem";
const todoItems = ({todoItems}) => {
    return (
    <>
    <div class="items-container">
        {todoItems.map(item => <Todoitem todoDate={item.dueDate} todoName={item.name}></Todoitem>)}
    </div>
    </>
    );
};
export default todoItems;