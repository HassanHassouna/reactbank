import React from 'react';
import dayjs, { Dayjs } from 'dayjs';

export interface INavbar {
  currentComponent: any;
  setCurrent: (current: string) => void;
}


export interface IBalance {
  balance: number | undefined;
  setBalance?: (balance: number) => void;
}


export interface IButton {
  text?: string;
  icon?: React.ReactNode;
  type: 'text' | 'link' | 'default' | 'primary' | 'dashed' | undefined;
  className?: string;
  danger?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  loading?: boolean | { delay: number };
}


export interface IBreakdown {
  categories: ICategory[];
}

export interface ICategory {
  _id: string;
  total: number;
}

export interface ITransaction {
  _id: string;
  amount: number;
  category: string;
  vendor: string;
  date: string | string [];
}

export type Transaction = Partial<ITransaction>;

export interface IDataSource {
  dataSource: Array<
    {
      key: string;
      name: string;
      amount: number;
      type: string;
      delete: React.ReactNode;
    }>;
}

export interface ITransactionTable {
  key: string;
  name: string;
  amount: number;
  type: string;
  delete: React.ReactNode;

}

export interface IDate {
  setDate: (date: string | string[]) => void;
}
