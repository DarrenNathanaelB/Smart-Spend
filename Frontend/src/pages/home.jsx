import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        axios.get('/api/getExpenses')
            .then(response => setExpenses(response.data))
            .catch(error => console.error('Error fetching expenses:', error));
    }, []);

    const handleDelete = (expense_id) => {
        // Filter out the expense with the given expense_id
        const updatedExpenses = expenses.filter(expense => expense.expense_id !== expense_id);
        setExpenses(updatedExpenses);

        // Send delete request to the server
        axios.delete(`/api/deleteExpense/${expense_id}`)
            .then(response => {
                if (response.data.success) {
                    alert('Expense deleted successfully');
                } else {
                    alert('Failed to delete expense');
                }
            })
            .catch(error => {
                console.error('Error deleting expense:', error);
                alert('An error occurred while deleting expense');
            });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Welcome to Smart Spend!</h1>
            <p className="mb-8">This is the homepage of our application.</p>

            <Link to="/addExpense" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-24">
                Add New
            </Link>

            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mt-4">
                <thead>
                    <tr>
                        <th className="py-2 px-4 bg-gray-100 border-b text-left text-sm font-semibold text-gray-700">Title</th>
                        <th className="py-2 px-4 bg-gray-100 border-b text-left text-sm font-semibold text-gray-700">Amount</th>
                        <th className="py-2 px-4 bg-gray-100 border-b text-left text-sm font-semibold text-gray-700">Description</th>
                        <th className="py-2 px-4 bg-gray-100 border-b text-left text-sm font-semibold text-gray-700">Categories</th>
                        <th className="py-2 px-4 bg-gray-100 border-b text-left text-sm font-semibold text-gray-700">Date</th>
                        <th className="py-2 px-4 bg-gray-100 border-b text-left text-sm font-semibold text-gray-700">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense.expense_id}>
                            <td className="py-2 px-4 border-b text-gray-700">{expense.title}</td>
                            <td className="py-2 px-4 border-b text-gray-700">{expense.amount}</td>
                            <td className="py-2 px-4 border-b text-gray-700">{expense.description}</td>
                            <td className="py-2 px-4 border-b text-gray-700">{expense.categories}</td>
                            <td className="py-2 px-4 border-b text-gray-700">{expense.date}</td>
                            <td className="py-2 px-4 border-b text-gray-700">
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2" onClick={() => handleDelete(expense.expense_id)}>Delete</button>
                                <Link to={`/updateExpense/${expense.expense_id}`} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded">Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
