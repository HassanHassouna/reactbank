import Transaction from '../models/Transaction';
import  transactions  from '../data/transactions.js';

const populateTransactions = async () => {
  try {
    await Transaction.insertMany(transactions);
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}


const dropDB = async () => {
  try {
    await Transaction.deleteMany();
    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

export { populateTransactions, dropDB };
