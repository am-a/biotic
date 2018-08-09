import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Intent } from '@blueprintjs/core';

import { RootState } from '../../../store';
import { clientModels, clientActions, clientSelectors } from '../';

interface Props {
  clients: clientModels.Client[];
  addRandomClient: (name: string) => any;
}

const getStyle = (): React.CSSProperties => ({
  textAlign: 'left',
  margin: 'auto',
  width: 200,
});

function ClientList({ clients = [], addRandomClient }: Props) {
  return (
    <ul style={getStyle()}>
      {clients.map(client => (
        <li key={client.id}></li>
      ))}
      <Button onClick={() => addRandomClient(Math.random().toString())}>Click Me!</Button>
    </ul>
  );
}

const mapStateToProps = (state: RootState) => ({
  clients: clientSelectors.getClients(state.clients),
});

export default connect(mapStateToProps, {
  addRandomClient: (name: string) => clientActions.add(name),
})(ClientList);
