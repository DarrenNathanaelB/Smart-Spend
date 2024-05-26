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
app.post('/addExpense', expenseController.addExpense);
app.get('/getExpenses', expenseController.getExpenses);
app.get('/getExpense/:id', expenseController.getExpenseById);
app.get('/getExpensesByCategory/:category', expenseController.getExpensesByCategory);
app.get('/getTotalExpense', expenseController.getTotalExpense);
app.put('/updateExpense/:id', expenseController.updateExpense);
app.delete('/deleteExpense/:id', expenseController.deleteExpense);

// Account operations
app.post('/register', accountController.register);
app.post('/login', accountController.login);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});