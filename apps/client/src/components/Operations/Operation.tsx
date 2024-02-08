import React, { useState } from 'react';
import { Form, Input, Space } from 'antd';
import { Btn } from '../../core/Button';
import { Typography } from 'antd';
import { postTransaction } from '../../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DatePick } from '../DatePicker/DatePicker';
import dayjs from 'dayjs';

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const tailLayout = {
  wrapperCol: { offset: 0, span: 16 }
};
export const Operation: React.FC = () => {
  const notify = (message: string) => toast(message);
  const [form] = Form.useForm();

  const [values, setValues] = useState({
    amount: 0,
    vendor: '',
    category: '',
    date: dayjs().format('YYYY-MM-DD') || ['']
  });

  const onChanges = (changedValues: any, allValues: any) => {
    setValues(allValues);
  };

  const onDeposit = async () => {
    const { amount, vendor, category, date } = values;
    await postTransaction({ amount, vendor, category, date });
    notify('Transaction added');
    form.resetFields();
  };
  const onWithdraw = async () => {
    const { amount, vendor, category, date } = values;
    await postTransaction({ amount: amount * -1, vendor, category, date });
    notify('Transaction added');
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onValuesChange={onChanges}
      style={{
        maxWidth: 600

      }}
    >
      <Title level={3}>Insert Transaction</Title>
      <Form.Item name="amount" rules={[{ required: true }]}>
        <Input placeholder={'Transaction amount'} />
      </Form.Item>
      <Form.Item name="vendor" rules={[{ required: true }]}>
        <Input placeholder={'Transaction vendor'} />
      </Form.Item>
      <Form.Item name="category" rules={[{ required: true }]}>
        <Input placeholder={'Transaction category'} />
      </Form.Item>
      <DatePick setDate={(date) => setValues({ ...values, date })} />
      <Form.Item {...tailLayout}>
        <Space>
          <Btn disabled={
            !values.amount || !values.vendor || !values.category
          } type="primary" className="bg-green-500" text="Deposit" onClick={onDeposit} />

          <Btn disabled={
            !values.amount || !values.vendor || !values.category
          } type="primary" text="Withdraw" danger onClick={onWithdraw} />
        </Space>
      </Form.Item>
      <ToastContainer />
    </Form>
  );
};


