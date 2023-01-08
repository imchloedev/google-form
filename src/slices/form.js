const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  title: '제목 없는 설문지',
  description: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    createForm: (state, action) => {
      state.title = action.payload.title;
      state.description = action.payload.description;
    },
  },
});

const formReducer = formSlice.reducer;

export const formActions = formSlice.actions;
export default formReducer;
