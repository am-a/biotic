import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router';

import { history, store } from './store';
import Home from './pages/Home';

ReactDOM.render( 
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" render={Home} />
              <Route render={() => (<div>Miss</div>)} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);