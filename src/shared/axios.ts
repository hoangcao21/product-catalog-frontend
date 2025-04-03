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
});

axiosInstance.interceptors.request.use((requestConfig) => {
  const newRequestConfig: InternalAxiosRequestConfig = {
    ...requestConfig,
    headers: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...(requestConfig.headers as any),

      Authorization: authUtils.getToken()
        ? `Bearer ${authUtils.getToken()}`
        : undefined,
    },
    paramsSerializer(params) {
      return qs.stringify(params);
    },
  };

  return newRequestConfig;
});

axiosInstance.interceptors.response.use(
  (response) => response.data, // Directly return successful responses.
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === HttpStatusCode.Unauthorized &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true; // Mark the request as retried to avoid infinite loops.

      try {
        // const refreshToken = authUtils.getRefreshToken();

        // const response = {}; // TODO: Invoke the refresh API from "api.ts"

        // const { accessToken, refreshToken: newRefreshToken } = response.data;

        // authUtils.changeToken(accessToken);
        // authUtils.changeRefreshToken(newRefreshToken);

        // axiosInstance.defaults.headers.common['Authorization'] =
        //   `Bearer ${accessToken}`;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Handle refresh token errors by clearing stored tokens and redirecting to the login page.
        console.error('Failed to refresh token', refreshError);

        window.alert(
          'Your authentication credentials are expired, you will be redirected to the login page...',
        );

        // Clear tokens will trigger EntryPointProvider
        authUtils.clearTokens();

        return Promise.reject(refreshError);
      }
    }

    alert(`Some error occurred... ${JSON.stringify(error.response)}`);

    return Promise.reject(error); // For all other errors, return the error as is.
  },
);
