import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReduser from './auth/auth-slice';
import contactReduser from './contacts/contact-slice';
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

const authPersistConfig = {
  key: 'AuthSlice',
  storage,
  whitelist: ['token'],
};

const reduser = combineReducers({
  auth: persistReducer(authPersistConfig, authReduser),
  contacts: contactReduser,
});

export type RootReducer = ReturnType<typeof reduser>;

export const store = configureStore({
  reducer: reduser,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
