import { configureStore } from '@reduxjs/toolkit';

import combinedReducers from './reducers/CombinedReducers';

export const store = configureStore({
  reducer: combinedReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
