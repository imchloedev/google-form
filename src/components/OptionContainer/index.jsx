import React from 'react';
import { Radio, Checkbox } from '@mui/material';
import * as QUESTION_MENU from 'lib/questionMenu';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { questionActions } from 'slices/questions';
import * as S from './style';

const OptionContainer = ({
  questionType,
  questionId,
  optionId,
  optionContent,
  isLast,
  isAnswer,
}) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const classes = S.useStyles();

  const isChecked = () => {
    if (pathname !== '/') return isAnswer;
    else return false;
  };

  const isDisabled = () => {
    if (pathname === '/') return true;
    else return false;
  };

  const onChangeOptionTitle = e => {
    dispatch(
      questionActions.changeOptionTitle({
        id: questionId,
        optionValue: e.target.value,
        optionId,
      })
    );
  };

  const handleAddOption = () => {
    isLast && dispatch(questionActions.addOption({ id: questionId, optionId }));
  };

  const getOptionBtn = () => {
    switch (questionType) {
      case QUESTION_MENU.MULTIPLE_CHOICE:
        return (
          <Radio
            classes={{ root: classes.root, checked: classes.checked }}
            checked={isChecked()}
            disabled={isDisabled()}
            value={optionContent}
            onClick={() =>
              dispatch(
                questionActions.setOneAnswer({
                  id: questionId,
                  optionContent,
                  isAnswer,
                })
              )
            }
          />
        );
      case QUESTION_MENU.CHECKBOX:
        return (
          <Checkbox
            classes={{ root: classes.root, checked: classes.checked }}
            checked={isChecked()}
            disabled={isDisabled()}
            value={optionContent}
            onClick={() =>
              dispatch(
                questionActions.setMultipleAnswers({
                  id: questionId,
                  optionContent,
                  isAnswer,
                })
              )
            }
          />
        );
      case QUESTION_MENU.DROPDOWN:
        return <div className="optionNumber">{optionId}</div>;
      default:
        return;
    }
  };

  return (
    <S.Wrapper>
      {getOptionBtn()}
      {pathname === '/' ? (
        <input
          className="optionInput"
          type="text"
          value={optionContent}
          onChange={onChangeOptionTitle}
          onClick={handleAddOption}
        />
      ) : (
        <div className="optionName">{optionContent}</div>
      )}
    </S.Wrapper>
  );
};

export default OptionContainer;
