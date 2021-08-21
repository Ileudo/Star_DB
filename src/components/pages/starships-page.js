import React from 'react';
import { StarshipList } from '../sw-components';
import { withRouter } from 'react-router';

const StarshipsPage = ({ history }) => {
  return (
    <StarshipList
      onItemSelected={(id) => {
        history.push(id);
      }}
    />
  );
};

// Теперь этот HOC (withRouter) передаст в StarshipsPage те самые три объекта, которые
// использует react-router. Это match, location и history. И нам будет нужен только history.
export default withRouter(StarshipsPage);
