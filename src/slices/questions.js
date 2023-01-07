import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';
import * as QUESTION_MENU from '../assets/data/QuestionMenu';

const initialState = [
  {
    id: uuid(),
    questionTitle: '제목없는 질문',
    menuSelected: QUESTION_MENU.MULTIPLE_CHOICE,
    isRequired: false,
    options: [
      {
        id: 1,
        option: '옵션 1',
      },
    ],
  },
  {
    id: uuid(),
    questionTitle: '제목없는 질문',
    menuSelected: QUESTION_MENU.MULTIPLE_CHOICE,
    isRequired: false,
    options: [
      {
        id: 1,
        option: '옵션 1',
      },
    ],
  },
];

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    changeMenu: (state, action) => {},
    addQuestion: (state, action) => {
      return state.concat(action.payload);
    },
    deleteQuestion: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    addOption: (state, action) => {},
    changeSwitch: (state, action) => {
      const selected = state.find(item => item.id === action.payload);
      selected.isRequired = !selected.isRequired;
    },
  },
});

const questionReducer = questionSlice.reducer;

export const questionActions = questionSlice.actions;
export default questionReducer;
