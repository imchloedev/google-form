import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './style';

const TitleContainer = ({ info, onChangeInfo, children }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <S.Wrapper>
      <span className="divider" />
      {pathname === '/' ? (
        <div className="editContainer">
          <input
            name="title"
            placeholder="설문지 제목"
            value={info.title}
            onChange={onChangeInfo}
          />
          <input
            name="description"
            placeholder="설문지 설명"
            value={info.description}
            onChange={onChangeInfo}
          />
        </div>
      ) : (
        <div className="viewContainer">
          <div className="viewTitle">{info.title}</div>
          <div className="viewDescription">{info.description}</div>
          {children}
        </div>
      )}
    </S.Wrapper>
  );
};

export default TitleContainer;
