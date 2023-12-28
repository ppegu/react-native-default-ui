import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Platform } from 'react-native';

export const PRODUCTION_API_URL = process.env.PRODUCTION_API_URL;

export const ANDROID_API_URL = process.env.ANDROID_API_URL;

export const IOS_API_URL = process.env.IOS_API_URL;

export const DEVELOPMENT_API_URL =
  Platform.OS === 'android' ? ANDROID_API_URL : IOS_API_URL;

export const API_URL =
  process.env.NODE_ENV === 'development'
    ? DEVELOPMENT_API_URL
    : PRODUCTION_API_URL;

const baseURL = API_URL + '/v1';

export const Api = axios.create({
  baseURL,
});

export async function protectedGetApi(path: string, params?: any) {
  const authToken = await AsyncStorage.getItem('authToken');

  return Api.get(path, {
    params,
    headers: {
      Authorization: 'Bearer ' + authToken,
    },
  });
}

export async function protectedPostApi(path: string, data?: any) {
  const authToken = await AsyncStorage.getItem('authToken');

  return Api.post(path, data, {
    headers: {
      Authorization: 'Bearer ' + authToken,
    },
  });
}
