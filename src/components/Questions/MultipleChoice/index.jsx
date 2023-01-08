import React from 'react';
import { Radio, FormControlLabel } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { questionActions } from '../../../slices/questions';
import * as S from './style';

const MultipleChoice = ({ option, questionId, optionId }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const onChangeOptionTitle = e => {
    dispatch(
      questionActions.changeOptionTitle({
        id: questionId,
        optionValue: e.target.value,
        optionId,
      })
    );
  };

  return (
    <S.Wrapper>
      {pathname === '/' ? (
        <div className="editChoiceWrapper">
          <Radio disabled />
          <S.InputLabel
            placeholder={option.option}
            onChange={onChangeOptionTitle}
          />
        </div>
      ) : (
        <FormControlLabel
          control={
            <Radio
              value={option.option}
              onClick={e =>
                dispatch(
                  questionActions.setOneAnswer({
                    id: questionId,
                    optionId: e.target.value,
                  })
                )
              }
            />
          }
          label={option.option}
        />
      )}
    </S.Wrapper>
  );
};

export default MultipleChoice;
