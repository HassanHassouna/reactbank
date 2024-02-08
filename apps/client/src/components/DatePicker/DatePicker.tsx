import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import { IDate } from '../../types/types';

export const DatePick: React.FC<IDate> = ({ setDate }) => {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    setDate(dateString);
  };
  return (
    <DatePicker onChange={onChange} />
  );
};

