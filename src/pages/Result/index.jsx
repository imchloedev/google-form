import React from 'react';
import TitleContainer from 'components/TitleContainer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Result = () => {
  const formInfo = useSelector(state => state.form);

  return (
    <div>
      <TitleContainer info={formInfo}>
        <p className="resultMessage">응답이 기록되었습니다.</p>
        <div className="backLink">
          <Link to="/view">다른 응답 제출</Link>
        </div>
      </TitleContainer>
    </div>
  );
};

export default Result;
