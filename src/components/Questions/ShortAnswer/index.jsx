import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { questionActions } from 'slices/questions';
import * as S from './style';

const ShortAnswer = ({ questionId }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const onChangeSentenceAnswer = e => {
    const { value } = e.target;
    dispatch(
      questionActions.setSentenceAnswer({ id: questionId, sentence: value })
    );
  };

  return (
    <S.Wrapper>
      {pathname === '/' ? (
        <S.ShortInput
          placeholder="단답형 텍스트"
          pathname={pathname}
          disabled
        />
      ) : (
        <S.ShortInput placeholder="내 답변" onChange={onChangeSentenceAnswer} />
      )}
    </S.Wrapper>
  );
};

export default ShortAnswer;
