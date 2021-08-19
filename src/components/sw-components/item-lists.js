import React from 'react';
import ItemsList from '../items-list';
import { withData } from '../hoc-helpers/with-data';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();
const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model }) => (
  <span>
    {name} ({model})
  </span>
);

const ListWithChildren = withChildFunction(ItemsList, renderName);

const PersonList = withData(ListWithChildren, getAllPeople);
const PlanetList = withData(ListWithChildren, getAllPlanets);
const StarshipList = withData(
  withChildFunction(ItemsList, renderModelAndName),
  getAllStarships
);

export { PersonList, PlanetList, StarshipList };
