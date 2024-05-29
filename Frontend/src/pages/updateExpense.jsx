import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateExpense = () => {
  const { expense_id } = useParams();
  const [expense, setExpense] = useState({
    title: '',
    amount: '',
    description: '',
    categories: '',
    date: '',
  });

  useEffect(() => {
    axios.get(`/api/getExpense/${expense_id}`)
      .then(response => setExpense(response.data))
      .catch(error => console.error('Error fetching expense:', error));
  }, [expense_id]);

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/updateExpense/${expense_id}`, expense)
      .then(response => {
        if (response.data.success) {
          alert('Expense updated successfully');
        } else {
          alert('Failed to update expense');
        }
      })
      .catch(error => {
        console.error('Error updating expense:', error);
        alert('An error occurred while updating expense');
      });
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold mb-4 text-black">Update Expense</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={expense.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={expense.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categories">Categories</label>
          <input
            type="text"
            id="categories"
            name="categories"
            value={expense.categories}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={expense.date}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Update Expense</button>
      </form>
    </div>
  );
};

export default UpdateExpense;
