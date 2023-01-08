import React from 'react';
import { Button } from '@mui/material';
import TitleContainer from 'components/TitleContainer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ViewContainer from '../../components/ViewContainer/index';
import * as S from './style';

const View = () => {
  const formInfo = useSelector(state => state.form);
  const questions = useSelector(state => state.question);

  return (
    <S.Wrapper>
      <TitleContainer info={formInfo} />
      {questions.map(question => (
        <ViewContainer
          key={question.id}
          questionId={question.id}
          question={question}
        />
      ))}
      <div className="buttonGroup">
        <Button variant="contained">
          <Link to="/result">제출하기</Link>
        </Button>
      </div>
    </S.Wrapper>
  );
};

export default View;
