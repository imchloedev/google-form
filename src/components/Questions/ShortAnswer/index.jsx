import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as S from './style';

const ShortAnswer = () => {
  const { pathname } = useLocation();
  const questions = useSelector(state => state.question);
  const dispatch = useDispatch();

  const onChangeAnswer = e => {
    const { value } = e.target;
  };

  return (
    <S.Wrapper>
      {pathname === '/' ? (
        <S.ShortInput placeholder="단답형 텍스트" pathname={pathname} />
      ) : (
        <S.ShortInput placeholder="내 답변" />
      )}
    </S.Wrapper>
  );
};

export default ShortAnswer;
