import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';

import { Client } from './models';
import * as clients from './actions';

export type ClientAction = ActionType<typeof clients>;

export type ClientState = Readonly<{
  clients: Client[];
}>;

export default combineReducers<ClientState, ClientAction>({
  clients: (state = [], action) => {
    switch (action.type) {
      case getType(clients.add):
        return [...state, action.payload];

      default:
        return state;
    }
  },
});
