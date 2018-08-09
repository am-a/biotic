import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';

import { clientReducer } from '../features/clients';

const rootReducer = combineReducers({
  clients: clientReducer,
});

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
