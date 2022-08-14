import { filterContact } from './filterActions';

import { createReducer } from '@reduxjs/toolkit';

export const filter = createReducer('', {
  [filterContact.type]: (_, action) => action.payload.toLowerCase(),
});
