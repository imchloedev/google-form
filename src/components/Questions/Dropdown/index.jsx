import React, { useState } from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { questionActions } from '../../../slices/questions';
import * as S from './style';

const Dropdown = ({ question, questionId, options }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const answer = question.answers.length > 0 ? question.answers[0] : '';

  const handleOptionDropdown = e => {
    dispatch(
      questionActions.setOneAnswer({
        id: questionId,
        optionId: e.target.value,
      })
    );
  };

  return (
    <S.Wrapper>
      {pathname === '/' ? (
        <div>
          {question.options.map(option => {
            const optionId = option.id;
            return (
              <div className="dropdownList" key={optionId}>
                <span>{optionId}</span>
                <input
                  className="dropdownListInput"
                  type="text"
                  placeholder={option.option}
                  onChange={e => {
                    dispatch(
                      questionActions.changeOptionTitle({
                        id: questionId,
                        optionValue: e.target.value,
                        optionId,
                      })
                    );
                  }}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <FormControl sx={{ m: 1, width: 180 }}>
          <Select value={answer} onChange={handleOptionDropdown}>
            {question.options.map(option => (
              <MenuItem key={option.id} value={option.option}>
                {option.option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </S.Wrapper>
  );
};

export default Dropdown;
