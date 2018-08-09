import { createSelector } from 'reselect';

import { ClientState } from './reducer';

export const getClients = (state: ClientState) => state.clients;