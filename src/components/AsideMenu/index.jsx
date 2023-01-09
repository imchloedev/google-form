import React from 'react';
import * as QUESTION_MENU from 'lib/questionMenu.js';
import { BsPlusCircle } from 'react-icons/bs';
import { GrView } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import { formActions } from 'slices/form';
import { questionActions } from 'slices/questions';
import * as S from './style';

const AsideMenu = ({ info }) => {
  const dispatch = useDispatch();

  const newQuestion = {
    id: uuid(),
    questionTitle: '제목없는 질문',
    menuSelected: QUESTION_MENU.MULTIPLE_CHOICE,
    isRequired: false,
    options: [
      {
        id: 1,
        option: '옵션 1',
      },
    ],
    answers: [],
    sentence: '',
  };

  const handleAddQuestion = () => {
    dispatch(questionActions.addQuestion(newQuestion));
  };

  const handleViewPage = () => {
    dispatch(formActions.createForm(info));
  };

  return (
    <S.Container>
      <S.Wrapper>
        <BsPlusCircle onClick={handleAddQuestion} />
        <Link to="/view">
          <GrView onClick={handleViewPage} />
        </Link>
      </S.Wrapper>
    </S.Container>
  );
};

export default AsideMenu;
