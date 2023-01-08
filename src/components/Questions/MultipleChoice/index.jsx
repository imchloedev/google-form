import React from 'react';
import { Radio, FormGroup, FormControlLabel } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as S from './style';

const MultipleChoice = () => {
  const { pathname } = useLocation();
  const questions = useSelector(state => state.question);
  const dispatch = useDispatch();

  return (
    <S.Wrapper>
      {pathname === '/' ? (
        <div className="editRadio">
          <div>
            <Radio disabled />
            <S.InputLabel value="옵션 1" />
          </div>
        </div>
      ) : (
        <FormGroup>
          <FormControlLabel control={<Radio />} label="옵션 1" />
        </FormGroup>
      )}
    </S.Wrapper>
  );
};

export default MultipleChoice;
