import * as cuid from 'cuid';
import { createAction } from 'typesafe-actions';

import { Client } from './models';

const ADD = 'clients/ADD';

export const add = createAction(ADD, (resolve) => {
  return (name: string) => resolve({ name, id: cuid() } as Client);
});
