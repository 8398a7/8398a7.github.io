import React from 'react';
import type { FC } from 'react';

import Routing from './Routing';
import useGoogleAnalytics from './lib/useGoogleAnalytics';

const App: FC = () => {
  useGoogleAnalytics();

  return <Routing />;
};

export default App;
