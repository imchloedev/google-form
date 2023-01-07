import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from './style';

const MainLayout = () => {
  return (
    <S.MainContainer>
      <S.MainWrapper>
        <Outlet />
      </S.MainWrapper>
    </S.MainContainer>
  );
};

export default MainLayout;
