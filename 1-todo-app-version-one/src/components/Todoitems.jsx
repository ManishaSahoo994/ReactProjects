import Todoitem from "./Todoitem";
import styles from "./Todoitems.module.css";
const todoItems = ({todoItems, onDeleteClick}) => {
    return (
    <>
    <div classNameName={styles.itemsContainer}>
        {todoItems.map(item => <Todoitem key={item.name} todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick}></Todoitem>)}
    </div>
    </>
    );
};
export default todoItems;