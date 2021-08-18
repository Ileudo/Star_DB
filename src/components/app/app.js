import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import ItemDetails, { Record } from '../item-details';
import Row from '../row';

import './app.css';

class App extends Component {
  constructor() {
    super();

    this.swapiService = new SwapiService();

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
    const { getPerson, getStarship, getPersonImage, getStarshipImage } =
      this.swapiService;
    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender:" />
        <Record field="eyeColor" label="Eye Color:" />
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model:" />
        <Record field="length" label="Length:" />
        <Record field="passengers" label="Passengers:" />
      </ItemDetails>
    );
    return (
      <div className="stardb-app">
        <Header />

        <Row left={personDetails} right={starshipDetails} />
      </div>
    );
  }
}

export default App;
