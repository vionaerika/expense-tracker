import ExpenseItem from "./ExpenseItem";
import ExpensesData from "../constants/ExpenseItemDetails";
import "./Expenses.css";

function Expenses() {
  return (
    <div className="expenses">
      {/*declare of variable*/}
      {ExpensesData.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default Expenses;
