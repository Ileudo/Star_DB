import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button/error-button';
import PeoplePage from '../people-page/people-page';

import './app.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      showRandomPlanet: true,
      hasError: false,
    };
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    return (
      <div>
        <Header />
        {planet}

        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>
        <ErrorButton />
        <PeoplePage />
        <div className="row mb-2">
          <div className="col md-6">
            <ItemsList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col md-6">
            <PersonDetails personId={this.state.selectedPerson} />
            <ErrorButton />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
