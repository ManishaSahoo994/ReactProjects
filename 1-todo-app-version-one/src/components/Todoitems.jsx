import Todoitem from "./Todoitem";
import styles from "./Todoitems.module.css";
const todoItems = ({todoItems}) => {
    return (
    <>
    <div className={styles.itemsContainer}>
        {todoItems.map(item => <Todoitem todoDate={item.dueDate} todoName={item.name}></Todoitem>)}
    </div>
    </>
    );
};
export default todoItems;