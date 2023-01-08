import React, { useState } from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as S from './style';

const Dropdown = () => {
  const { pathname } = useLocation();
  const questions = useSelector(state => state.question);
  const dispatch = useDispatch();
  const [option, setOption] = useState('0');

  const handleOption = e => setOption(e.target.value);

  return (
    <div>
      <FormControl sx={{ m: 1, width: 180 }}>
        <Select value={option} onChange={handleOption}>
          <MenuItem value="0">선택 1</MenuItem>
          <MenuItem value="1">선택 2</MenuItem>
          <MenuItem value="2">선택 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown;
