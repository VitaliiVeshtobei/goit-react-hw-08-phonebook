import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from '../AppBar/AppBar';

import { LayoutContainer } from './LayoutStyled';

export const Layout = () => {
  return (
    <LayoutContainer>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutContainer>
  );
};
