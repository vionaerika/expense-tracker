import Expenses from "./components/Expenses";
import ExpensesData from "./constants/ExpenseItemDetails";

function App() {
  return (
    <div>
      <h2>Expense Tracker</h2>
      <Expenses props={ExpensesData} />
    </div>
  );
}

export default App;

/* list of lists 
      {expenses.map((expense) => {
        return expense.map((ele) => {
          return (
            <ExpenseItem title={ele} amount={ele} date={ele}></ExpenseItem>
          );
        });
      })} */
