import { SwapiServiceConsumer } from '../swapi-service-context';
import ItemDetails, { Record } from '../item-details';

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

export default StarshipDetails;
