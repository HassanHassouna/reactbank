import useSWR from 'swr';
import axios from 'axios';

const version = 'v1';
const fetcher = (url: string) => axios.get(url).then(res => res.data);
export const useBalance = () => {
  const { data, error } = useSWR(`http://localhost:8000/api/${version}/transactions/balance`, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error
  };
};
