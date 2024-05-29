import React, { useState } from 'react';
import axios from 'axios';

const AddExpense = () => {
    const [newExpense, setNewExpense] = useState({
        title: '',
        amount: '',
        description: '',
        category: '',
        date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewExpense({
            ...newExpense,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = '/api/addExpenses';

        try {
            await axios.post(url, newExpense);

            alert('Expense added successfully');

            setNewExpense({
                title: '',
                amount: '',
                description: '',
                category: '',
                date: '',
            });
        } catch (error) {
            console.error('Error submitting expense:', error);
            alert('Failed to add expense');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add New Expense</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="title" className="sr-only">Title</label>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                autoComplete="title"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Title"
                                value={newExpense.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="amount" className="sr-only">Amount</label>
                            <input
                                id="amount"
                                name="amount"
                                type="number"
                                autoComplete="amount"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Amount"
                                value={newExpense.amount}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="sr-only">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                autoComplete="description"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Description"
                                value={newExpense.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="category" className="sr-only">Category</label>
                            <select
                                id="category"
                                name="category"
                                autoComplete="category"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-50"
                                value={newExpense.category}
                                onChange={handleChange}
                            >
                                <option value="">Select Category</option>
                                <option value="Makan">Makan</option>
                                <option value="Kuliah">Kuliah</option>
                                <option value="Hiburan">Hiburan</option>
                                <option value="Transportasi">Transportasi</option>
                                <option value="Perlengkapan">Perlengkapan</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="date" className="sr-only">Date</label>
                            <input
                                id="date"
                                name="date"
                                type="date"
                                autoComplete="date"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Date"
                                value={newExpense.date}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Add Expense
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddExpense;
