import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator/error-indicator';
import ItemsList from '../items-list';
import ItemDetails from '../item-details';
import Row from '../row';
import ErrorBoundary from '../error-boundary';
import './people-page.css';

class PeoplePage extends Component {
  constructor() {
    super();

    this.swapiService = new SwapiService();

    this.state = {
      selectedPerson: 3,
    };
  }

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    // Вывод доп. информации по клику
    // Получение данных
    const itemsList = (
      <ItemsList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {(item) => `${item.name} (${item.birthYear})`}
      </ItemsList>
    );

    const personDetails = (
      <ErrorBoundary>
        <ItemDetails personId={this.state.selectedPerson} />
      </ErrorBoundary>
    );

    return <Row left={itemsList} right={personDetails} />;
  }
}

export default PeoplePage;
