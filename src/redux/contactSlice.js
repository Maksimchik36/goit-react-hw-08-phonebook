import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userApi';

const initialState = {
  name: '',
  number: '',
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    // при перезагрузке страницы -  allContactsSuccess - следит за изменениями на userApi endpoints currentUser при результате matchFulfilled и забирает необходимые нам данные (это происходит при перезагрузке страницы)
    builder.addMatcher(userApi.endpoints.allContacts.matchFulfilled,
        (state, actions) =>  {
          // const { user } = payload;
         console.log(state);
          return {...state, ...actions.payload}
        }
      );
      
    // // при регистрации - userSignupSuccess - следит за изменениями на userApi endpoints signup при результате matchFulfilled и забирает необходимые нам данные
    // builder.addMatcher(userApi.endpoints.signup.matchFulfilled,
    //   (state, { payload }) => {
    //     const { user, token } = payload;
        
    //     state.email = user.email;
    //     state.name = user.name;
    //     state.token = token;
    //   }
    // );

    // // при логинизации - userLoginSuccess - следит за изменениями на userApi endpoints login при результате matchFulfilled и забирает необходимые нам данные
    // builder.addMatcher(userApi.endpoints.login.matchFulfilled,
    //   (state, { payload }) => {
    //     const { user, token } = payload;
    //     state.email = user.email;
    //     state.name = user.name;
    //     state.token = token;
    //   }
    // );

    // // при выходе из аккаунта - userLogout - следит за изменениями на userApi endpoints logout при результате matchFulfilled и перезаписывает значения аргументов в пустые строки 
    // builder.addMatcher(userApi.endpoints.logout.matchFulfilled, (state) => {
    //   state.email = initialState.email;
    //   state.name = initialState.name;
    //   state.token = initialState.token;
    // }); 

    // editContactSuccess - следит за изменениями на userApi endpoints editContact при результате matchFulfilled 
    builder.addMatcher(userApi.endpoints.editContact.matchFulfilled,
      (state, actions) =>  {
        state.contacts = state.contacts.map(contact => {
          console.log("state",state)
          console.log("actions.payload", actions.payload)
          return contact.id === actions.payload.id ? actions.payload : contact;
        });
      }
    );

    // при перезагрузке страницы - userError - следит за изменениями на userApi endpoints currentUser при результате matchRejected и перезаписывает значение token в пустую строку (например, если token просрочен)
    // builder.addMatcher(userApi.endpoints.currentUser.matchRejected,
    //   (state, { payload }) => {
    //     if (payload?.status === 401) {
    //       state.token = '';
    //     }
    //   }
    // );
  },
});

// Action creators are generated for each case reducer function
// export const { RegisterSuccess, getCurrentSuccess } = contactSlice.actions;

export default contactSlice.reducer;