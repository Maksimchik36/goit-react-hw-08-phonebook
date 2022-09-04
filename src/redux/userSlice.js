import { createSlice } from '@reduxjs/toolkit';
import { showError, showSuccess, showWarning } from 'components/ToastMessages/ToastMessages';
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

        showSuccess("You have successfully signed up.");
      }
    );

    // при регистрации - userSignupError - следит за изменениями на userApi endpoints signup при результате matchRejected анализирует значение status и выдаёт соответствующее сообщение об ошибке
    builder.addMatcher(userApi.endpoints.signup.matchRejected,
      (state, { payload }) => {
        const { status } = payload;
        switch (status) {
          case 400:
            showError("User creation error.");
            break;
          case 500:
            showError("Server Error.")            
            break;
          default:
            showWarning("Something wrong.");
        }      
      }
    );

    // при логинизации - userLoginSuccess - следит за изменениями на userApi endpoints login при результате matchFulfilled и забирает необходимые нам данные
    builder.addMatcher(userApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;

        state.email = user.email;
        state.name = user.name;
        state.token = token;

        showSuccess("Welcome you again !");
      }
    );

    // при регистрации - userLoginError - следит за изменениями на userApi endpoints login при результате matchRejected анализирует значение status и выдаёт соответствующее сообщение об ошибке
    builder.addMatcher(userApi.endpoints.login.matchRejected,
      (state, { payload }) => {
        const { status } = payload;
        switch (status) {
          case 400:
            showError("Login error. Try again.");
            break;
          default:
            showWarning("Something wrong.");
        }      
      }
    );

    // при выходе из аккаунта - userLogout - следит за изменениями на userApi endpoints logout при результате matchFulfilled и перезаписывает значения аргументов в пустые строки 
    builder.addMatcher(userApi.endpoints.logout.matchFulfilled, (state) => {
      state.email = initialState.email;
      state.name = initialState.name;
      state.token = initialState.token;

      showSuccess("You left the application.");
    }); 

    // при выходе из аккаунта - userLogout - следит за изменениями на userApi endpoints logout при результате matchRejected и выдаёт соответствующее сообщение об ошибке 
    builder.addMatcher(userApi.endpoints.logout.matchRejected,
      (state, { payload }) => {
        const { status } = payload;
        switch (status) {
          case 401:
            showError("No header with authorization token.");
            break;
          case 500:
            showError("Server Error.")            
            break;
          default:
            showWarning("Something wrong.");
        }      
      }
    );

    // при перезагрузке страницы -  userCurrentSuccess - следит за изменениями на userApi endpoints currentUser при результате matchFulfilled и забирает необходимые нам данные (это происходит при перезагрузке страницы)
    builder.addMatcher(userApi.endpoints.currentUser.matchFulfilled,
      (state, actions) =>  {
              return {...state, ...actions.payload}
      }
    );

    // при перезагрузке страницы - userCurrentError - следит за изменениями на userApi endpoints currentUser при результате matchRejected и перезаписывает значение token в пустую строку (например, если token просрочен) и выдает сообщение об ошибке
    builder.addMatcher(userApi.endpoints.currentUser.matchRejected,
      (state, { payload }) => {
        if (payload?.status === 401) {
          state.token = '';
          showError("No header with authorization token.");
        }
      }
    );
  },
});


export default userSlice.reducer;