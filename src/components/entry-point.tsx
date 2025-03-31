import { AUTH_COOKIE_ID } from '../shared/config';
import { EntryPointContext } from '../shared/contexts/entry-point';
import { PATH_PAGE_AUTH, PATH_PAGE_HOME } from '../shared/routes';
import { AuthCookies } from '../shared/utils/auth';
import { Backdrop, CircularProgress } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Outlet, useNavigate } from 'react-router';

/**
 * The entry point of the application
 */
export const EntryPoint: FC = () => {
  const navigate = useNavigate();

  const [cookies] = useCookies<string, AuthCookies>([AUTH_COOKIE_ID]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!cookies?.AUTH_COOKIE_ID) {
      console.warn('❌ No authentication credentials is present');

      navigate(`/${PATH_PAGE_AUTH}`);
    } else {
      console.log('✅ Authentication credentials is present');

      navigate(`/${PATH_PAGE_HOME}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookies?.AUTH_COOKIE_ID]);

  return (
    <EntryPointContext.Provider value={{ loading, setLoading }}>
      <Outlet />

      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </EntryPointContext.Provider>
  );
};
