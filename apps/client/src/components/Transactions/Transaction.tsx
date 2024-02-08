import React from 'react';
import {
  Table,
} from 'antd';

import {columns} from "../../constants"
import { IDataSource, ITransaction, ITransactionTable } from '../../types/types';
export const Transaction: React.FC<{dataSource: ITransactionTable[] | undefined }> = ({ dataSource }) => {
  return (
    <Table pagination={false} dataSource={dataSource} columns={columns} />
  );
}
