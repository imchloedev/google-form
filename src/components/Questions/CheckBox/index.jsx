import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { questionActions } from '../../../slices/questions';
import * as S from './style';

const CheckBox = ({ option, questionId, optionId }) => {
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
        <div className="editCheckboxWrapper">
          <Checkbox disabled />
          <S.InputLabel
            placeholder={option.option}
            onChange={onChangeOptionTitle}
          />
        </div>
      ) : (
        <FormControlLabel
          control={
            <Checkbox
              value={option.option}
              onClick={e =>
                dispatch(
                  questionActions.setMultipleAnswers({
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

export default CheckBox;
