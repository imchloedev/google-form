import React from 'react';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import OptionContainer from 'components/OptionContainer';
import SelectMenu from 'components/SelectMenu';
import LongAnswer from 'Questions/LongAnswer';
import ShortAnswer from 'Questions/ShortAnswer';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { IoMdCopy } from 'react-icons/io';
import { IoTrashOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { questionActions } from 'slices/questions';
import * as S from './style';
import * as QUESTION_MENU from 'assets/data/QuestionMenu';

export const menus = [
  { id: QUESTION_MENU.SHORT_ANSWER, option: '단답형' },
  { id: QUESTION_MENU.LONG_ANSWER, option: '장문형' },
  { id: QUESTION_MENU.MULTIPLE_CHOICE, option: '객관식 질문' },
  { id: QUESTION_MENU.CHECKBOX, option: '체크박스' },
  { id: QUESTION_MENU.DROPDOWN, option: '드롭다운' },
];

const QuestionContainer = ({ question, questionId }) => {
  const { menuSelected, questionTitle, isRequired } = question;

  const dispatch = useDispatch();

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
    if (menuSelected === QUESTION_MENU.SHORT_ANSWER) {
      return <ShortAnswer questionId={questionId} />;
    } else if (menuSelected === QUESTION_MENU.LONG_ANSWER) {
      return <LongAnswer questionId={questionId} />;
    } else if (
      menuSelected === QUESTION_MENU.MULTIPLE_CHOICE ||
      menuSelected === QUESTION_MENU.CHECKBOX ||
      menuSelected === QUESTION_MENU.DROPDOWN
    ) {
      return (
        <OptionContainer
          question={question}
          questionId={questionId}
          questionType={menuSelected}
        />
      );
    }
  };

  return (
    <S.Container>
      <div className="topBar">
        <input
          className="editQuestionTitle"
          placeholder="질문"
          value={questionTitle}
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
            control={<Switch checked={isRequired} onChange={handleSwitch} />}
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
