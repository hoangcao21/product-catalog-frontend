import { AuthPage } from '../pages/auth';
import { HomePage } from '../pages/home';
import { SplashPage } from '../pages/splash';
import { EntryPoint } from './entry-point';
import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

export const PageRouting: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<EntryPoint />}>
          <Route index element={<SplashPage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="home" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
