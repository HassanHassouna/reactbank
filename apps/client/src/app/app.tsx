import React, { useState, Suspense } from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Transactions } from '../components/Transactions';
import { Operation } from '../components/Operations/Operation';
import { Breakdown } from '../components/Breakdown/Breakdown';
import { useCategories } from '../api/index';
import { Skeleton } from 'antd';

export function App() {
  const [current, setCurrent] = useState('trans');
  const { categories } = useCategories();
  return (
    <div>
      <Navbar currentComponent={
        current === 'trans' ?
          <Suspense fallback={
            <Skeleton active={true} />
          }>
            <Transactions />
          </Suspense>
          :
          current === 'ops' ?

            <Suspense fallback={
              <Skeleton active={true} />
            }>
              <Operation />
            </Suspense> :
            current === 'breakdown' ?

              <Suspense fallback={
                <Skeleton active={true} />
              }>
                <Breakdown categories={categories} />
              </Suspense> :
              <div> Loading... </div>
      } setCurrent={setCurrent} />

    </div>
  );
}

export default App;
