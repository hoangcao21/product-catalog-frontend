import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

export const EntryPoint: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('auth');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};
