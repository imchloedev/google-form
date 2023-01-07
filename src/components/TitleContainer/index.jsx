import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './style';

const TitleContainer = ({ info, onChangeInfo }) => {
  const location = useLocation();
  const { pathname } = location;

  //  console.log(pathname);

  return (
    <S.Wrapper>
      <span className="divider" />
      {pathname === '/' ? (
        <div className="edit_container">
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
        <div className="view_container">
          <div>{info.title}</div>
          <div>{info.description}</div>
        </div>
      )}
    </S.Wrapper>
  );
};

export default TitleContainer;
