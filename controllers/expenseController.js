const Expense = require('../models/expenseModel');
const User = require('../models/userModel');

// Add a new expense
exports.addExpense = async (req, res) => {
  try {
    const { amount, participants, splitType } = req.body;

    // Validate split method
    if (splitType === 'percentage') {
      const totalPercentage = participants.reduce((acc, p) => acc + p.percentage, 0);
      if (totalPercentage !== 100) return res.status(400).json({ error: 'Percentages must add up to 100%' });
    }

    const newExpense = new Expense({ amount, participants, splitType });
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Retrieve individual user expenses
exports.getUserExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ 'participants.user': req.params.userId });
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Retrieve overall expenses for all users
exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Download balance sheet (dummy implementation)
exports.downloadBalanceSheet = async (req, res) => {
  // Generate the balance sheet logic here
  res.status(200).json({ message: "Balance sheet generated successfully" });
};
