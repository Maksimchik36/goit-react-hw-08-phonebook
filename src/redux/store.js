import { configureStore } from '@reduxjs/toolkit';
import filter from './filterSlice';
import user from './user';
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


// ----- filter persistor -----
const filterPersistConfig = {
  key: 'filter',
  version: 1,
  storage,
};

const persistedFilterReducer = persistReducer(filterPersistConfig, filter);

// ----- filter persistor -----
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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(userApi.middleware),
});

export const persistor = persistStore(store);