import { createSlice } from '@reduxjs/toolkit';
import { showSuccess } from 'components/ToastMessages/ToastMessages';
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
        showSuccess("Found contacts.")
          return {...state, ...actions.payload}
        }
      );

    // при перезагрузке страницы -  allContactsError - следит за изменениями на userApi endpoints currentUser при результате matchRejected и анализирует значение status и выдаёт соответствующее сообщение об ошибке
    builder.addMatcher(userApi.endpoints.allContacts.matchRejected,
      (state, { payload }) => {
        const { status } = payload;
        switch (status) {
          case 401:
            showError("No header with authorization token.");
            break;
          case 404:
            showError("There is no such collection.");
            break;
          case 500:
            showError("Server Error.")            
            break;
          default:
            showWarning("Something wrong.");
        }      
      }
    );

    // при перезагрузке страницы -  newContactSuccess - следит за изменениями на userApi endpoints newContact при результате matchRejected и выдает сообщение об ошибке, в зависимости от статуса
    builder.addMatcher(userApi.endpoints.newContact.matchRejected,
      (state, { payload }) => {
        const { status } = payload;
        switch (status) {
          case 400:
            showError("Contact creation error.");
            break;
          case 401:
            showError("No header with authorization token.");
            break;          
          default:
            showWarning("Something wrong.");
        }      
      }
    );

     // deleteContactError - следит за изменениями на userApi endpoints deleteContact при результате matchRejected и выдает сообщение об ошибке, в зависимости от статуса    
     builder.addMatcher(userApi.endpoints.deleteContact.matchRejected,
        (state, { payload }) => {
        const { status } = payload;
        switch (status) {
          case 401:
            showError("No header with authorization token.");
            break;
          case 404:
            showError("There is no such owner.");
            break;
          case 500:
            showError("Server Error.")            
            break;
          default:
            showWarning("Something wrong.");
        }      
      }
      );
  },
});


export default contactSlice.reducer;