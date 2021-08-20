import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers/with-swapi-service';

const PersonDetails = (props) => {
  const { itemId } = props;
  const { getPerson, getPersonImage } = props.swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="gender" label="Gender:" />
      <Record field="eyeColor" label="Eye Color:" />
    </ItemDetails>
  );
};

export default withSwapiService(PersonDetails);
