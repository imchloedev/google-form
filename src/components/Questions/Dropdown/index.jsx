import React from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { questionActions } from 'slices/questions';
import * as S from './style';

const Dropdown = ({ question, questionId, options }) => {
  const dispatch = useDispatch();
  const selectedAnswer = question.answers.length > 0 ? question.answers[0] : '';

  const handleOptionDropdown = e => {
    dispatch(
      questionActions.setOneAnswer({
        id: questionId,
        optionContent: e.target.value,
      })
    );
  };

  return (
    <S.Wrapper>
      <FormControl sx={{ m: 1, width: 180 }}>
        <Select onChange={handleOptionDropdown} value={selectedAnswer}>
          {options.map(option => (
            <MenuItem key={option.id} value={option.option}>
              {option.option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </S.Wrapper>
  );
};

export default Dropdown;
