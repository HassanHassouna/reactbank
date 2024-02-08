import {
  AppstoreOutlined,
  BoxPlotOutlined,
  TransactionOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import React from 'react';
import { Btn } from '../core/Button';


export const NavbarItems: MenuProps['items'] = [
  {
    label: 'Transactions',
    key: 'trans',
    icon: <TransactionOutlined />
  },
  {
    label: 'Operations',
    key: 'ops',
    icon: <AppstoreOutlined />
  },
  {
    label: 'Breakdown',
    key: 'breakdown',
    icon: <BoxPlotOutlined />
  }
];


export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount'
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type'
  },
  {
    title: 'Delete',
    dataIndex: 'delete',
    key: 'delete'
  }
];


export const items: MenuProps['items'] = [
  {
    key: '0',
    label: 'Default'
  },
  {
    key: '01',
    label: 'January'
  },
  {
    key: '02',
    label: 'February'

  },
  {
    key: '03',
    label: 'March'
  },
  {
    key: '04',
    label: 'April'
  },
  {
    key: '05',
    label: 'May'
  },
  {
    key: '06',
    label: 'June'
  },
  {
    key: '07',
    label: 'July'
  },
  {
    key: '08',
    label: 'August'
  },
  {
    key: '09',
    label: 'September'
  },
  {
    key: '10',
    label: 'October'
  },
  {
    key: '11',
    label: 'November'
  },
  {
    key: '12',
    label: 'December'
  }
];
