const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  title: '설문지 제목',
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

export default formReducer;
