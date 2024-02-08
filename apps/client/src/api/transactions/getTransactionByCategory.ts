import useSWR from 'swr';
import axios from 'axios';

const version = 'v1';
const fetcher = (url: string) => axios.get(url).then(res => res.data);
export const useGetTransactionsByCategory = (category: string) => {
  const { data, error } = useSWR(`http://localhost:8000/api/${version}/transactions/byCategory/${category}`, fetcher);
  return {
    transactionsByCategory: data,
    isLoading: !error && !data,
    isError: error
  };
};
