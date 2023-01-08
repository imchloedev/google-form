import React from 'react';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import SelectMenu from 'components/SelectMenu';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { IoMdCopy } from 'react-icons/io';
import { IoTrashOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import * as QUESTION_MENU from '../../assets/data/QuestionMenu';
import { questionActions } from '../../slices/questions';
import CheckBox from '../Questions/CheckBox';
import Dropdown from '../Questions/Dropdown';
import LongAnswer from '../Questions/LongAnswer';
import MultipleChoice from '../Questions/MultipleChoice';
import ShortAnswer from '../Questions/ShortAnswer';
import * as S from './style';

export const menus = [
  { id: QUESTION_MENU.SHORT_ANSWER, option: '단답형' },
  { id: QUESTION_MENU.LONG_ANSWER, option: '장문형' },
  { id: QUESTION_MENU.MULTIPLE_CHOICE, option: '객관식 질문' },
  { id: QUESTION_MENU.CHECKBOX, option: '체크박스' },
  { id: QUESTION_MENU.DROPDOWN, option: '드롭다운' },
];

const QuestionContainer = ({ question, questionId }) => {
  const questions = useSelector(state => state.question);
  const dispatch = useDispatch();

  console.log(questions);
  // 하나의 question 필요
  // const activeQuestion = questions.find(q => q.id === questionId);
  // console.log(question);

  // console.log(activeQuestion);

  const newQuestion = {
    ...question,
    id: uuid(),
  };

  const handleChangeTitle = e => {
    dispatch(
      questionActions.changeTitle({
        id: questionId,
        questionTitle: e.target.value,
      })
    );
  };

  const handleCopyQuestion = () => {
    dispatch(questionActions.addQuestion(newQuestion));
  };

  const handleDeleteQuestion = () => {
    dispatch(questionActions.deleteQuestion(questionId));
  };

  const handleSwitch = () => {
    dispatch(questionActions.changeSwitch(questionId));
  };

  const getQuestionContent = () => {
    if (question.menuSelected === QUESTION_MENU.SHORT_ANSWER) {
      return <ShortAnswer />;
    } else if (question.menuSelected === QUESTION_MENU.LONG_ANSWER) {
      return <LongAnswer />;
    } else if (question.menuSelected === QUESTION_MENU.MULTIPLE_CHOICE) {
      return <MultipleChoice />;
    } else if (question.menuSelected === QUESTION_MENU.CHECKBOX) {
      return <CheckBox question={question} />;
    } else if (question.menuSelected === QUESTION_MENU.DROPDOWN) {
      return <Dropdown />;
    }
  };

  return (
    <S.Container>
      <div className="topBar">
        <input
          className="questionTitle"
          placeholder="질문"
          onChange={handleChangeTitle}
        />
        <SelectMenu menus={menus} questionId={questionId} question={question} />
      </div>

      <div className="questionContentContainer">{getQuestionContent()}</div>

      <div className="bottomBar">
        <div className="iconWrapper" onClick={handleCopyQuestion}>
          <IoMdCopy />
        </div>
        <div className="iconWrapper" onClick={handleDeleteQuestion}>
          <IoTrashOutline />
        </div>
        <span className="divider" />
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={question.isRequired} onChange={handleSwitch} />
            }
            label="필수"
            labelPlacement="start"
          />
        </FormGroup>
        <div className="iconWrapper">
          <HiOutlineDotsVertical />
        </div>
      </div>
    </S.Container>
  );
};

export default QuestionContainer;