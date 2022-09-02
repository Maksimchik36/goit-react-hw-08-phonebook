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
  reducers: { },
  extraReducers: (builder) => {
    // при регистрации - userSignupSuccess - следит за изменениями на userApi endpoints signup при результате matchFulfilled и забирает необходимые нам данные
    builder.addMatcher(userApi.endpoints.signup.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;
        
        state.email = user.email;
        state.name = user.name;
        state.token = token;
      }
    );

    // при логинизации - userLoginSuccess - следит за изменениями на userApi endpoints login при результате matchFulfilled и забирает необходимые нам данные
    builder.addMatcher(userApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;
        state.email = user.email;
        state.name = user.name;
        state.token = token;
      }
    );

    // при выходе из аккаунта - userLogout - следит за изменениями на userApi endpoints logout при результате matchFulfilled и перезаписывает значения аргументов в пустые строки 
    builder.addMatcher(userApi.endpoints.logout.matchFulfilled, (state) => {
      state.email = initialState.email;
      state.name = initialState.name;
      state.token = initialState.token;
    }); 

    // при перезагрузке страницы -  userCurrentSuccess - следит за изменениями на userApi endpoints currentUser при результате matchFulfilled и забирает необходимые нам данные (это происходит при перезагрузке страницы)
    builder.addMatcher(userApi.endpoints.currentUser.matchFulfilled,
      (state, actions) =>  {
        // const { user } = payload;
        return {...state, ...actions.payload}
      }
    );

    // при перезагрузке страницы - userError - следит за изменениями на userApi endpoints currentUser при результате matchRejected и перезаписывает значение token в пустую строку (например, если token просрочен)
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