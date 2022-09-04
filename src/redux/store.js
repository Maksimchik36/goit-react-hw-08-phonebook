import { configureStore } from '@reduxjs/toolkit';
import filter from './filterSlice';
import user from './userSlice';
import { userApi } from './userApi';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


// ----- filter persistor ----- для хранения текста запроса в localStorage
const filterPersistConfig = {
  key: 'filter',
  version: 1,
  storage,
};

const persistedFilterReducer = persistReducer(filterPersistConfig, filter);

// ----- user persistor ----- для хранения token в localStorage
const userPersistConfig = {
  key: 'user',
  version: 1,
  storage,
  whitelist: ['token'],
};

const persistedUserReducer = persistReducer(userPersistConfig, user);

export const store = configureStore({
  reducer: {
    filter: persistedFilterReducer,
    user: persistedUserReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), userApi.middleware,
  ],
});


export const persistor = persistStore(store);