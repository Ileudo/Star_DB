import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (AnyComponent, mapMethodsToProps) => {
  return (props) => {
    console.log(props);
    return (
      <SwapiServiceConsumer>
        {(swapiService) => {
          const serviceProps = mapMethodsToProps(swapiService);
          return <AnyComponent {...props} {...serviceProps} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export { withSwapiService };
