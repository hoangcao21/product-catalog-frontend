import { AUTH_COOKIE_ID, AUTH_REFRESH_COOKIE_ID } from '../config';
import Cookies from 'universal-cookie';

const commonCookieOptions = {
  path: '/', // Valid for all URLs
};

/**
 * Universal Cookies - Cookie helper that haves onChange listener (so helpful)!
 */
const cookies = new Cookies();

export interface AuthCookies {
  [AUTH_COOKIE_ID]: string;
  [AUTH_REFRESH_COOKIE_ID]: string;
}

/**
 * Authentication Utility - Cookie Storage manipulation object
 */
export const authUtils = {
  // Get Access Token
  getToken: (): string => cookies.get(AUTH_COOKIE_ID),
  changeToken: (token: string, expiresAt: Date) => {
    cookies.set(AUTH_COOKIE_ID, token, {
      ...commonCookieOptions,
      expires: expiresAt,
    });
  },

  // Get Refresh Token
  getRefreshToken: (): string => cookies.get(AUTH_REFRESH_COOKIE_ID),
  changeRefreshToken: (refreshToken: string, expiresAt: Date) => {
    cookies.set(AUTH_REFRESH_COOKIE_ID, refreshToken, {
      ...commonCookieOptions,
      expires: expiresAt,
    });
  },

  // Clear Access Token and Refresh Token
  clearTokens: () => {
    cookies.remove(AUTH_COOKIE_ID, { maxAge: 0, path: '/' });

    cookies.remove(AUTH_REFRESH_COOKIE_ID, { maxAge: 0, path: '/' });
  },
};
