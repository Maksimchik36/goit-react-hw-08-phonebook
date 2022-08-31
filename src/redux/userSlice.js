import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userApi';

const initialState = {
  name: '',
  email: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // //+++ rename loginSuccess to RegisterSuccess 
    // RegisterSuccess: (state, { payload }) => {
    //   const { user, token } = payload;

    //   state.name = user.name;
    //   state.email = user.email;
    //   state.token = token;
    // },
    // // getCurrentSuccess: (state, { payload }) => {
    // //   state.email = payload.email;
    // //   state.name = payload.name;
    // // },
  },
  extraReducers: (builder) => {
    // builder.addMatcher(cartApi.endpoints.getCartItems.matchFulfilled,
    //   userApi.endpoints.login.matchFulfilled,
    //   (state, { payload }) => {
    //     const { user, token } = payload;

    //     state.email = user.email;
    //     state.name = user.name;
    //     state.token = token;
    //   }
    // );

    // +++ ?!?!?!?!  userSuccess - следит за изменениями на userApi endpoints signup при результате matchFulfilled и забирает необходимые нам данные
    builder.addMatcher(userApi.endpoints.signup.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;
        
        state.email = user.email;
        state.name = user.name;
        state.token = token;
      }
    );

    //+++!?!?!??! userCurrentUser - следит за изменениями на userApi endpoints currentUser при результате matchFulfilled и забирает необходимые нам данные (это происходит при перезагрузке страницы)
    builder.addMatcher(userApi.endpoints.currentUser.matchFulfilled,
      (state, actions) =>  {
        // const { user } = payload;
        return {...state, ...actions.payload}
      }
    );

    // userLogout - следит за изменениями на userApi endpoints logout при результате matchFulfilled и перезаписывает значения аргументов в пустые строки 
    builder.addMatcher(userApi.endpoints.logout.matchFulfilled, (state) => {
      state.email = initialState.email;
      state.name = initialState.name;
      state.token = initialState.token;
    });

    // userError - следит за изменениями на userApi endpoints currentUser при результате matchRejected и перезаписывает значение token в пустую строку 
    builder.addMatcher(userApi.endpoints.currentUser.matchRejected,
      (state, { payload }) => {
        if (payload?.status === 401) {
          state.token = '';
        }
      }
    );
  },
});

// Action creators are generated for each case reducer function
export const { RegisterSuccess, getCurrentSuccess } = userSlice.actions;

export default userSlice.reducer;