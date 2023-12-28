import type { AxiosError, AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Api } from '../axios/axios.util';

export type useApiProps = AxiosRequestConfig & {
  dependencies?: any[];
};

export type useApiReturn<T> = {
  data: T | undefined;
  error?: AxiosError;
  loading: boolean;
};

export default function useApi<T>({
  dependencies = [],
  ...request
}: useApiProps): useApiReturn<T> {
  const [data, setData] = useState<T | undefined>();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | undefined>();

  useEffect(() => {
    setLoading(true);
    Api.request(request)
      .then((resp) => {
        setData(resp.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [...dependencies]);

  return { data, loading, error };
}
