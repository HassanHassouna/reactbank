import express from 'express';
import TransactionRouter from './TransactionRouter';

const router = express.Router();
router.use('/transactions', TransactionRouter);

export default router;
