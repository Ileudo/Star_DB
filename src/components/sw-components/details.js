import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';

const PersonDetails = (props) => {
  return (
    <SwapiServiceConsumer>
      {(swapiService) => {
        return (
          <ItemDetails
            itemId={props.itemId}
            getData={swapiService.getPerson}
            getImageUrl={swapiService.getPersonImage}
          >
            <Record field="gender" label="Gender:" />
            <Record field="eyeColor" label="Eye Color:" />
          </ItemDetails>
        );
      }}
    </SwapiServiceConsumer>
  );
};

const PlanetDetails = (props) => {
  return (
    <SwapiServiceConsumer>
      {(swapiService) => {
        return (
          <ItemDetails
            itemId={props.itemId}
            getData={swapiService.getPlanet}
            getImageUrl={swapiService.getPlanetImage}
          >
            <Record field="population" label="Population:" />
            <Record field="rotationPeriod" label="Rotation Period:" />
            <Record field="diameter" label="Diameter:" />
          </ItemDetails>
        );
      }}
    </SwapiServiceConsumer>
  );
};

const StarshipDetails = (props) => {
  return (
    <SwapiServiceConsumer>
      {(swapiService) => {
        return (
          <ItemDetails
            itemId={props.itemId}
            getData={swapiService.getStarship}
            getImageUrl={swapiService.getStarshipImage}
          >
            <Record field="model" label="Model:" />
            <Record field="length" label="Length:" />
            <Record field="passengers" label="Passengers:" />
          </ItemDetails>
        );
      }}
    </SwapiServiceConsumer>
  );
};

export { PersonDetails, PlanetDetails, StarshipDetails };
