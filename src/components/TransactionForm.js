import React, { useState } from 'react';


function TransactionForm({ onAddTransaction }) {
    
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        //  new transaction object
        const newTransaction = {
            description,
            category,
            amount: parseFloat(amount),
            date
        };

        // Call the onAddTransaction function if provided
        if (onAddTransaction) {
            onAddTransaction(newTransaction);
        }

        // Clear the form fields
        setDate("");
        setCategory("");
        setDescription("");
        setAmount("");
    };

    return (
        <div className="form">
            <form className="form-items" onSubmit={handleSubmit}>
                <div>
                    <label>Date</label>
                    <input
                        type="text"
                        placeholder="Date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />

                </div>
                
                <div>

                    <label>Category</label>
                    <input
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />

                </div>

                <div>

                    <label>Description</label>
                    <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                </div>

                <div>

                    <label>Amount</label>
                    <input
                        type="text"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />

                </div>

                <button type="submit">Add Transaction</button>

            </form>
        </div>
    );
}

export default TransactionForm;
  
