import useSWR from 'swr';
import { ICategory } from '../../types/types';
import axios from 'axios';

const version = 'v1';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const useCategories = () => {
  const {
    data,
    error
  } = useSWR<ICategory[]>(`http://localhost:8000/api/${version}/transactions/sumByCategory`, fetcher);
  return {
    categories: data,
    isLoading: !error && !data,
    isError: error
  };
};
