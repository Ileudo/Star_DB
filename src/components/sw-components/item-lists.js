import React from 'react';
import ItemsList from '../items-list';
import { withData } from '../hoc-helpers/with-data';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();
const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const PersonList = withData(ItemsList, getAllPeople);
const PlanetList = withData(ItemsList, getAllPlanets);
const StarshipList = withData(ItemsList, getAllStarships);

export { PersonList, PlanetList, StarshipList };
