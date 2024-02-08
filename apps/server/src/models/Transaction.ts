import { Schema, model } from 'mongoose';

const transactionSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    vendor: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default model('Transaction', transactionSchema);
