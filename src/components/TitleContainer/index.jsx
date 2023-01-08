import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './style';

const TitleContainer = ({ info, onChangeInfo, children }) => {
  const location = useLocation();
  const { pathname } = location;
  const { title, description } = info;

  return (
    <S.Wrapper>
      <span className="divider" />
      {pathname === '/' ? (
        <div className="editContainer">
          <input
            name="title"
            placeholder="설문지 제목"
            value={title}
            onChange={onChangeInfo}
          />
          <input
            name="description"
            placeholder="설문지 설명"
            value={description}
            onChange={onChangeInfo}
          />
        </div>
      ) : (
        <div className="viewContainer">
          <div className="viewTitle">{title}</div>
          <div className="viewDescription">{description}</div>
          {children}
        </div>
      )}
    </S.Wrapper>
  );
};

export default TitleContainer;
