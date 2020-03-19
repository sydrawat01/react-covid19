import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CardContainer from './components/Card/CardContainer';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faInstagram,
  faGithubAlt
} from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCodeBranch, faGithubAlt, faInstagram);
function App() {
  return (
    <div className="bg-none">
      <Header />
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
