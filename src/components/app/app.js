import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonDetails from '../person-details';
import ItemsList from '../items-list';

import './app.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      showRandomPlanet: true,
      selectedPerson: null,
    };
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

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

        <div className="row mb-2">
          <div className="col md-6">
            <ItemsList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
