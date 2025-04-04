import { EntryPointContextProvider } from '../shared/contexts/entry-point';
import { Auth, useAuth } from '../shared/hooks/useAuth';
import { PATH_PAGE_AUTH, PATH_PAGE_HOME } from '../shared/routes';
import { Backdrop, CircularProgress } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';

/**
 * The entry point of the application
 */
export const EntryPoint: FC = () => {
  const navigate = useNavigate();

  const auth: Auth = useAuth();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!auth.isValid) {
      console.warn('❌ No authentication credentials is present');

      navigate(`/${PATH_PAGE_AUTH}`);
    } else {
      console.log('✅ Authentication credentials is present');

      navigate(`/${PATH_PAGE_HOME}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.isValid]);

  return (
    <EntryPointContextProvider.Provider
      value={{ loading, setLoading, authPresent: auth.isValid }}
    >
      <Outlet />

      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </EntryPointContextProvider.Provider>
  );
};
