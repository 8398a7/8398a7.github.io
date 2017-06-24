import 'font-awesome/css/font-awesome';
import { History } from 'history';
import 'materialize-css/dist/css/materialize';
import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Store } from 'redux';
import 'video-react/dist/video-react';
import Footer from './components/Footer';
import Header from './components/Header';
import './main.scss';
import Routing from './routing';

export interface IAppProps {
  store: Store<{}>;
  history: History;
}

const App: React.StatelessComponent<IAppProps> = ({ store, history }) => (
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
