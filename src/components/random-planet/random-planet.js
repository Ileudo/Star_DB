import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './random-planet.css';

class RandomPlanet extends Component {
  constructor() {
    super();

    this.swapiService = new SwapiService();

    this.state = {
      planet: {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null,
      },
    };

    this.updatePlanet();
    console.log(this.state.planet);
  }

  // Как всегда используем функцию-стрелку, поскольку мы будем передавать эту функцию в другую фуннкцию, и нам нужно
  // быть осторожными со значением this. И теперь мы можем вставить этот кусочек кода в updatePlanet(). Намного легче читать
  // такой код, правда?
  onPlanetLoaded = (planet) => {
    this.setState({ planet });
    console.log(this.state.planet);
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService.getPlanet(id).then((p) => {
      const planet = { ...p, id: id };
      this.onPlanetLoaded(planet);
    });
  }

  render() {
    const { id, name, population, rotationPeriod, diameter } =
      this.state.planet;

    // return <Spinner />;

    return (
      <div className="random-planet jumbotron rounded">
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        />
        <div>
          <h4>{name}</h4>
          <Spinner />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default RandomPlanet;
