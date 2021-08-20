import React from 'react';
import ItemsList from '../item-list';
import { withData } from '../hoc-helpers/with-data';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();
const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

// Эта функция умеет брать любой React-компонент  и устанавливать ему в качестве children
// заданную функцию.
const withChildFunction = (AnyComponent, fn) => {
  return (props) => {
    return <AnyComponent {...props}>{fn}</AnyComponent>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model }) => (
  <span>
    {name} ({model})
  </span>
);

const PersonList = withData(
  withChildFunction(ItemsList, renderName),
  getAllPeople
);

const PlanetList = withData(
  withChildFunction(ItemsList, renderName),
  getAllPlanets
);

const StarshipList = withData(
  withChildFunction(ItemsList, renderModelAndName),
  getAllStarships
);

export { PersonList, PlanetList, StarshipList };
