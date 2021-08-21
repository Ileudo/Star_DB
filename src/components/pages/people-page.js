import React from 'react';
import { withRouter } from 'react-router';
import Row from '../row';
import { PersonList, PersonDetails } from '../sw-components';

const PeoplePage = ({ match, history }) => {
  const { id } = match.params;
  return (
    <Row
      // Мы перейдем по относительно пути в history.push(id)
      left={<PersonList onItemSelected={(id) => history.push(id)} />}
      right={<PersonDetails itemId={id} />}
    />
  );
};

export default withRouter(PeoplePage);
