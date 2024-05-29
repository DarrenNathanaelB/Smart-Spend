const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./src/config/db.config');
const expenseController = require('./src/controllers/expenseController');
const accountController = require('./src/controllers/accountControllers');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
connectDB();

// CRUD operations for expenses
app.post('/api/addExpense', expenseController.addExpense);
app.get('/api/getExpenses', expenseController.getExpenses);
app.get('/api/getExpense/:id', expenseController.getExpenseById);
app.get('/api/getExpensesByCategory/:category', expenseController.getExpensesByCategory);
app.get('/api/getTotalExpense', expenseController.getTotalExpense);
app.put('/api/updateExpense/:id', expenseController.updateExpense);
app.delete('/api/deleteExpense/:id', expenseController.deleteExpense);

// Account operations
app.post('/api/register', accountController.register);
app.post('/api/login', accountController.login);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});