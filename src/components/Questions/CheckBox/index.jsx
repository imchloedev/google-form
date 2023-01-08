import React from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { questionActions } from '../../../slices/questions';
import * as S from './style';

const CheckBox = ({ question, isLast }) => {
  const { pathname } = useLocation();
  const questions = useSelector(state => state.question);
  const dispatch = useDispatch();

  const { options, id } = question;

  return (
    <S.Wrapper>
      {pathname === '/' ? (
        options
          .map(option => (
            <div className="editCheckbox" key={option.id}>
              <div>
                <Checkbox disabled />
                <S.InputLabel value={option.option} />
              </div>
            </div>
          ))
          .concat(
            <div>
              <Checkbox disabled />
              <S.InputLabel value="옵션추가" />
            </div>
          )
      ) : (
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="옵션 1" />
        </FormGroup>
      )}
    </S.Wrapper>
  );
};

export default CheckBox;
