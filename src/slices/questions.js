import { createSlice } from '@reduxjs/toolkit';
import * as QUESTION_MENU from 'lib/questionMenu';
import uuid from 'react-uuid';

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

    setSentenceAnswer: (state, action) => {
      const { id, sentence } = action.payload;
      const selected = state.find(item => item.id === id);
      selected.sentence = sentence;
    },

    setOneAnswer: (state, action) => {
      const { id, optionContent, isAnswer } = action.payload;
      const selected = state.find(item => item.id === id);
      if (!selected) return;
      selected.answers.length > 0 && selected.answers.splice(-1, 1);
      if (!isAnswer) {
        selected.answers.push(optionContent);
      }
    },

    setMultipleAnswers: (state, action) => {
      const { id, isAnswer, optionContent } = action.payload;
      const selected = state.find(item => item.id === id);
      const checkedIdx = selected.answers.findIndex(
        item => item === optionContent
      );

      if (!isAnswer) {
        selected.answers.push(optionContent);
      } else {
        if (checkedIdx === 0) selected.answers.shift();
        else selected.answers.splice(checkedIdx, 1);
      }
    },

    addOption: (state, action) => {
      const { id, optionId } = action.payload;
      const questionIdx = state.findIndex(item => item.id === id);
      state[questionIdx].options.push({
        id: optionId,
        option: `옵션 ${optionId}`,
      });
    },

    changeSwitch: (state, action) => {
      const selected = state.find(item => item.id === action.payload);
      selected.isRequired = !selected.isRequired;
    },

    reorderQuestion: (state, action) => {
      const { firstIdx, secondIdx } = action.payload;
      const [removed] = state.splice(firstIdx, 1);
      state.splice(secondIdx, 0, removed);
    },
  },
});

const questionReducer = questionSlice.reducer;

export const questionActions = questionSlice.actions;
export default questionReducer;
