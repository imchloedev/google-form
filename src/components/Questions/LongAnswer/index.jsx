import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { questionActions } from 'slices/questions';
import * as S from './style';

const LongAnswer = ({ questionId }) => {
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
          placeholder="장문형 텍스트"
          pathname={pathname}
          disabled
        />
      ) : (
        <S.ShortInput placeholder="내 답변" onChange={onChangeSentenceAnswer} />
      )}
    </S.Wrapper>
  );
};

export default LongAnswer;
