import ExpenseItem from "./components/ExpenseItem";
import expenses from "./constants/ExpenseItemDetails";

function App() {
  return (
    <div>
      <h2>Expense Tracker</h2>
      {/*declare of variable*/}
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        );
      })}

      {/* for list of lists
      {expenses.map((expense) => {
        return expense.map((ele) => {
          return (
            <ExpenseItem title={ele} amount={ele} date={ele}></ExpenseItem>
          );
        });
      })} */}
    </div>
  );
}

export default App;
