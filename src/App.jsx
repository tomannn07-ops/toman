import { useState } from "react";
import "./App.css";

function App() {
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (expense === "") {
      alert("Please enter an expense");
      return;
    }

    setExpenses([
      ...expenses,
      {
        id: Date.now(),
        amount: Number(expense),
      },
    ]);

    setExpense("");
  };

  const totalExpense = expenses.reduce(
    (total, item) => total + item.amount,
    0
  );

  const balance = Number(income || 0) - totalExpense;

  return (
    <div className="app">
      <div className="container">
        <h1>💰 Personal Expense Tracker</h1>
        <p className="subtitle">Manage your money easily</p>

        <div className="cards">
          <div className="card income">
            <h3>💵 Income</h3>
            <h2>₹{income || 0}</h2>
          </div>

          <div className="card expense">
            <h3>💸 Expenses</h3>
            <h2>₹{totalExpense}</h2>
          </div>

          <div className="card balance">
            <h3>💰 Balance</h3>
            <h2>₹{balance}</h2>
          </div>
        </div>

        <div className="form-box">
          <h2>Add Expense</h2>

          <input
            type="number"
            placeholder="Enter your income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter expense amount"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
          />

          <button onClick={addExpense}>+ Add Expense</button>
        </div>

        <div className="expense-list">
          <h2>📋 Expense List</h2>

          {expenses.length === 0 ? (
            <p>No expenses added yet.</p>
          ) : (
            expenses.map((item) => (
              <div className="expense-item" key={item.id}>
                <span>Expense</span>
                <strong>₹{item.amount}</strong>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;