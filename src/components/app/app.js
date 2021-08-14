import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonDetails from '../person-details';
import ItemsList from '../items-list';

import './app.css';

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="row mb-2">
        <div className="col md-6">
          <ItemsList />
        </div>
        <div className="col md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
