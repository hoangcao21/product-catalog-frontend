import { authUtils } from '../utils/auth';

export interface Auth {
  isValid: boolean;
  setValid: () => void;
}

export const useAuth = (): Auth => {
  const isCredentialsSet: boolean = authUtils.isCredentialsPresent();

  return {
    isValid: isCredentialsSet,
    setValid: authUtils.setCredentialsPresent,
  };
};
