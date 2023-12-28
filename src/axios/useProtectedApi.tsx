import AsyncStorage from '@react-native-async-storage/async-storage';
import useApi, { type useApiProps } from './useApi';

export default function useProtectedApi<T>({
  dependencies = [],
  ...request
}: useApiProps) {
  const response = async () => {
    const authToken = await AsyncStorage.getItem('authToken');

    return useApi<T>({
      ...request,
      dependencies: [...dependencies, authToken],
      headers: { Authorization: `Bearer ${authToken}` },
    });
  };

  return response();
}
