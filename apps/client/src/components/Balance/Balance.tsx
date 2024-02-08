import React from 'react';
import { IBalance } from '../../types/types';

export const Balance: React.FC<IBalance> = ({ balance }) => {

  return (
    <p className={`flex text-center mx-auto text-white text-xs`}>
      Balance:&nbsp; <span className={`${balance && balance > 0 ? 'text-green-600' : 'text-red-600'}`}>
        {balance}
    </span>
    </p>
  );
};

