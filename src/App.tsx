import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import './main.scss';
import Header from './components/Header';
import Routing from './routing';

type Props = {
  store: any,
  history: any,
};

const App: React.StatelessComponent<Props> = ({ store, history }) => (
  <Provider {...{ store }}>
    <ConnectedRouter {...{ history }}>
      <div>
        <Header />
        <div className="container">
          <div className="row center">
            <Routing />
          </div>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
