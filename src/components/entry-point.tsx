import { EntryPointContext } from '../shared/contexts/entry-point';
import { Backdrop, CircularProgress } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router';

export const EntryPoint: FC = () => {
  // const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // navigate('auth');
  }, []);

  return (
    <EntryPointContext.Provider value={{ loading, setLoading }}>
      <Outlet />

      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </EntryPointContext.Provider>
  );
};
