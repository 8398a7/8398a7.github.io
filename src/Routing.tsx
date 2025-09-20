import React from 'react';
import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch';
import { Overview } from './containers/Overview';
import Hobby from './containers/Hobby';

const Routing: FC = () => (
  <>
    <Header />
    <main className="app-main">
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </main>
    <Footer />
  </>
);

export default Routing;
