import { configureStore } from '@reduxjs/toolkit';

import { userApi } from './usersSlice';

// import { filter } from './reducers';

export const store = configureStore({
  reducer: { [userApi.reducerPath]: userApi.reducer },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    userApi.middleware,
  ],
});
