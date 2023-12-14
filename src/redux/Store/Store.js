import { combineReducers } from 'redux';

import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../ContactsSlice/ContactsSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export { store };
