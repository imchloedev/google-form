import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from './style';

const MainLayout = () => {
  return (
    <S.MainContainer>
      <Outlet />
    </S.MainContainer>
  );
};

export default MainLayout;
