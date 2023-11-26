import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaaa", amount: 10, category: "utilities" },
    { id: 2, description: "bbb", amount: 6, category: "Food" },
    { id: 3, description: "ccc", amount: 10, category: "utilities" },
    { id: 4, description: "ddd", amount: 90, category: "bank" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
