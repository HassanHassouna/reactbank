import BaseRouter from './BaseRouter.js';
import Transaction from '../models/Transaction';
import { Request, Response } from 'express';

class TransactionRouter extends BaseRouter {
  constructor() {
    super(Transaction);
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const transactions = await this.model.find({});
      res.send(transactions);
    } catch (error) {
      console.log(error);
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    const newTransaction = req.body;
    try {
      await this.model.create(newTransaction);
      const transactions = await this.model.find({});
      res.send(transactions);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    try {
      await this.model.findByIdAndDelete(id);
      const transactions = await this.model.find({});
      res.send(transactions);
    } catch (error) {
      console.log(error);
    }
  }


  async getSumByCategory(req: Request, res: Response): Promise<void> {
    try {
      const transactions = await this.model.aggregate([
        {
          $group: {
            _id: '$category',
            total: { $sum: '$amount' }
          }
        }
      ]);
      res.send(transactions);
    } catch (error) {
      console.log(error);
    }
  }

  async getBalance(req: Request, res: Response): Promise<void> {
    try {
      const transactions = await this.model.find({});
      const balance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
      res.send({ balance });
    } catch (error) {
      console.log(error);
    }
  }

  async getByMonth(req: Request, res: Response): Promise<void> {
    const month = req.params.month;
    try {
      const transactions = await this.model.aggregate([
        {
          $match: {
            date: { $regex: `-${month}-` }
          }
        }
      ]);
      res.send(transactions);
    } catch (error) {
      console.log(error);
    }
  }

  async getTransactionsByCategory(req: Request, res: Response): Promise<void> {
    const category = req.params.category;
    try {
      const transactions = await this.model.find({ category });
      res.send(transactions);
    } catch (error) {
      console.log(error);
    }
  }

  initializeRoutes() {
    super.initializeRoutes();
    this.router.delete('/:id', this.delete.bind(this));
    this.router.get('/balance', this.getBalance.bind(this));
    this.router.get('/sumByCategory', this.getSumByCategory.bind(this));
    this.router.get('/byMonth/:month', this.getByMonth.bind(this));
    this.router.get('/byCategory/:category', this.getTransactionsByCategory.bind(this));
  }
}

export default new TransactionRouter().router;
