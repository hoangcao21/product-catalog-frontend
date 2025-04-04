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

const LOCAL_STORAGE_KEY__IS_CREDENTIALS_SET = 'isCredentialsSet';

/**
 * Authentication Utility - Cookie Storage manipulation object
 */
export const authUtils = {
  isCredentialsPresent: function () {
    const isCredentialsSet: boolean = !!localStorage.getItem(
      LOCAL_STORAGE_KEY__IS_CREDENTIALS_SET,
    );

    return isCredentialsSet;
  },
  setCredentialsPresent: function () {
    localStorage.setItem(LOCAL_STORAGE_KEY__IS_CREDENTIALS_SET, 'present');
  },
  removeCredentialsPresent: function () {
    localStorage.removeItem(LOCAL_STORAGE_KEY__IS_CREDENTIALS_SET);
  },
  // Clear Access Token and Refresh Token
  clearAll: function () {
    cookies.remove(AUTH_COOKIE_ID, { ...commonCookieOptions, maxAge: 0 });

    cookies.remove(AUTH_REFRESH_COOKIE_ID, {
      ...commonCookieOptions,
      maxAge: 0,
    });

    this.removeCredentialsPresent();
  },
};
