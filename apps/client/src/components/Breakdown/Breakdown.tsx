import React from 'react';
import { ICategory } from '../../types/types';
import { CategoryPopover } from './CategoryPopover';

export const Breakdown: React.FC<{ categories: ICategory[] | undefined }> = ({ categories }) => {
  return (
    <div>
      <h1>Breakdown</h1>
      <ul>
        {categories?.map((category, index) => (
          <CategoryPopover key={index} category={category} />
        ))}
      </ul>
    </div>
  );
};

