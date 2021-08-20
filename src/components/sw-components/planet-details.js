import { SwapiServiceConsumer } from '../swapi-service-context';
import ItemDetails, { Record } from '../item-details';

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

export default PlanetDetails;
