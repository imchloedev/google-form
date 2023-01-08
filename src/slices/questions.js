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
];

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    changeTitle: (state, action) => {
      const { id, questionTitle } = action.payload;
      const selected = state.find(item => item.id === id);
      selected.questionTitle = questionTitle;
    },

    changeMenu: (state, action) => {
      const { id, menuSelected } = action.payload;
      const selected = state.find(item => item.id === id);
      selected.menuSelected = menuSelected;
    },

    addQuestion: (state, action) => {
      return state.concat(action.payload);
    },

    deleteQuestion: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },

    changeOptionTitle: (state, action) => {
      const { id, optionId, optionValue } = action.payload;
      const selected = state.find(item => item.id === id);
      const filtered = selected.options.find(option => option.id === optionId);
      filtered.option = optionValue;
    },

    addOption: (state, action) => {},

    setSentenceAnswer: (state, action) => {
      const { id, sentence } = action.payload;
      const selected = state.find(item => item.id === id);
      selected.sentence = sentence;
    },

    setOneAnswer: (state, action) => {
      const { id, optionId } = action.payload;
      const selected = state.find(item => item.id === id);
      selected.answers.push(optionId);
      if (selected.answers.length > 1) {
        selected.answers.splice(0, 1);
      }
    },

    setMultipleAnswers: (state, action) => {
      const { id, optionId } = action.payload;
      const selected = state.find(item => item.id === id);
      const checkedIdx = selected.answers.findIndex(item => item === optionId);

      if (
        selected.answers.length > 0 &&
        selected.answers[checkedIdx] === optionId
      ) {
        selected.answers.splice(checkedIdx, 1);
      } else {
        selected.answers.push(optionId);
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
