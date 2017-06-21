import * as React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { History } from 'history';
import './main.scss';
import Header from './components/Header';
import Routing from './routing';
import Footer from './components/Footer';
import 'materialize-css/dist/css/materialize';
import 'font-awesome/css/font-awesome';
import 'video-react/dist/video-react';

export type TAppProps = {
  store: Store<{}>,
  history: History,
};

const App: React.StatelessComponent<TAppProps> = ({ store, history }) => (
  <Provider {...{ store }}>
    <ConnectedRouter {...{ history }}>
      <div>
        <Header />
        <div className="container">
          <div className="row center">
            <Routing />
          </div>
        </div>
        <Footer revision={process.env.GIT_SHA} />
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
