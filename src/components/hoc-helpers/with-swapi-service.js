import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

export const withSwapiService = (AnyComponent) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {(swapiService) => {
          return <AnyComponent {...props} swapiService={swapiService} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};
