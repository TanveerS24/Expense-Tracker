import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    description: {
        type: String,
        required: false
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ['Food', 'Transport', 'Utilities', 'Entertainment', 'Accommodation', 'Other'],
        default: 'Other'
    },
    transactionType: {
        type: String,
        enum: ['Credit', 'Debit'],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Expense = mongoose.model('Expense', expenseSchema);

export default Expense;
