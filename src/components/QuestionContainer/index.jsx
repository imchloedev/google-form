import React from 'react';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import OptionContainer from 'components/OptionContainer';
import LongAnswer from 'components/Questions/LongAnswer';
import ShortAnswer from 'components/Questions/ShortAnswer';
import SelectMenu from 'components/SelectMenu';
import * as QUESTION_MENU from 'lib/questionMenu';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { IoMdCopy } from 'react-icons/io';
import { IoTrashOutline } from 'react-icons/io5';
import { RxDragHandleDots2 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { questionActions } from 'slices/questions';
import * as S from './style';

export const menus = [
  { id: QUESTION_MENU.SHORT_ANSWER, option: '단답형' },
  { id: QUESTION_MENU.LONG_ANSWER, option: '장문형' },
  { id: QUESTION_MENU.MULTIPLE_CHOICE, option: '객관식 질문' },
  { id: QUESTION_MENU.CHECKBOX, option: '체크박스' },
  { id: QUESTION_MENU.DROPDOWN, option: '드롭다운' },
];

const QuestionContainer = ({ question, questionId, provided }) => {
  const { menuSelected, questionTitle, isRequired, options } = question;
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

  const getOptionList = type => {
    const optionList = options
      .map(option => (
        <OptionContainer
          key={option.id}
          questionId={questionId}
          option={option}
          optionId={option.id}
          optionContent={option.option}
          questionType={type}
          isLast={false}
        />
      ))
      .concat(
        <OptionContainer
          key={options.length + 1}
          questionId={questionId}
          optionId={options.length + 1}
          questionType={type}
          optionContent="옵션 추가"
          isLast={true}
        />
      );

    return optionList;
  };

  const getQuestionContent = () => {
    switch (menuSelected) {
      case QUESTION_MENU.SHORT_ANSWER:
        return <ShortAnswer questionId={questionId} />;
      case QUESTION_MENU.LONG_ANSWER:
        return <LongAnswer questionId={questionId} />;
      case QUESTION_MENU.MULTIPLE_CHOICE:
      case QUESTION_MENU.CHECKBOX:
      case QUESTION_MENU.DROPDOWN:
        return getOptionList(menuSelected);
      default:
        return;
    }
  };

  return (
    <S.Container>
      <div className="handler" {...provided.dragHandleProps}>
        <RxDragHandleDots2 />
      </div>
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
