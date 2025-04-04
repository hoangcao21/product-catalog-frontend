import { rotateCredentials } from '../pages/auth/api';
import { BACKEND_URL } from './config';
import { authUtils } from './utils/auth';
import Axios, {
  AxiosInstance,
  HttpStatusCode,
  InternalAxiosRequestConfig,
} from 'axios';
import * as qs from 'qs';

export const axiosInstance: AxiosInstance = Axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use((requestConfig) => {
  const newRequestConfig: InternalAxiosRequestConfig = {
    ...requestConfig,
    headers: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...(requestConfig.headers as any),
    },
    paramsSerializer(params) {
      return qs.stringify(params);
    },
  };

  return newRequestConfig;
});

const IS_AUTH_RETRY_KEY = 'IS_AUTH_RETRY_KEY';

axiosInstance.interceptors.response.use(
  (response) => response.data, // Directly return successful responses.
  async (error) => {
    const originalRequest = error.config;

    const isRetry = !!localStorage.getItem(IS_AUTH_RETRY_KEY);

    console.log('Already retry to refresh? ', isRetry ? 'yes' : 'no');

    if (error.response?.status === HttpStatusCode.Unauthorized && !isRetry) {
      localStorage.setItem(IS_AUTH_RETRY_KEY, 'present'); // Mark the request as retried to avoid infinite loops.

      try {
        await rotateCredentials();

        // Retry failed previous request after refresh token successfully
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Handle refresh token errors by clearing stored tokens and redirecting to the login page.
        console.error('Failed to refresh token', refreshError);

        window.alert(
          'Your authentication credentials are expired, you will be redirected to the login page...',
        );

        // Clear tokens will trigger EntryPointProvider
        authUtils.clearAll();

        return Promise.reject(refreshError);
      } finally {
        localStorage.removeItem(IS_AUTH_RETRY_KEY);
      }
    }

    alert(`Some error occurred... ${JSON.stringify(error.response)}`);

    return Promise.reject(error); // For all other errors, return the error as is.
  },
);
