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
      {
        id: 2,
        option: '옵션 2',
      },
      {
        id: 3,
        option: '옵션 3',
      },
    ],
    answers: [],
    sentence: '',
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
    answers: [],
    sentence: '',
  },
];

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    changeTitle: (state, action) => {
      const selected = state.find(item => item.id === action.payload.id);
      selected.questionTitle = action.payload.questionTitle;
    },

    changeMenu: (state, action) => {
      const selected = state.find(item => item.id === action.payload.id);
      selected.menuSelected = action.payload.menuSelected;
    },

    addQuestion: (state, action) => {
      return state.concat(action.payload);
    },

    deleteQuestion: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },

    changeOptionTitle: (state, action) => {
      const selected = state.find(item => item.id === action.payload.id);
      const filtered = selected.options.find(
        option => option.id === action.payload.optionId
      );
      filtered.option = action.payload.optionValue;
    },

    addOption: (state, action) => {},

    setSentence: (state, action) => {},

    setOneAnswer: (state, action) => {
      const selected = state.find(item => item.id === action.payload.id);
      selected.answers.push(action.payload.optionId);
      if (selected.answers.length > 1) {
        selected.answers.splice(0, 1);
      }
    },

    setMultipleAnswers: (state, action) => {
      const selected = state.find(item => item.id === action.payload.id);
      const checkedIdx = selected.answers.findIndex(
        item => item === action.payload.optionId
      );

      if (
        selected.answers.length > 0 &&
        selected.answers[checkedIdx] === action.payload.optionId
      ) {
        selected.answers.splice(checkedIdx, 1);
      } else {
        selected.answers.push(action.payload.optionId);
      }
    },

    changeSwitch: (state, action) => {
      const selected = state.find(item => item.id === action.payload);
      selected.isRequired = !selected.isRequired;
    },
  },
});

const questionReducer = questionSlice.reducer;

export const questionActions = questionSlice.actions;
export default questionReducer;
