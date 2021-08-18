import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator/error-indicator';
import ItemsList from '../items-list';
import PersonDetails from '../person-details';
import './people-page.css';

const Row = ({ left, right }) => {
  return (
    <div className="row mb-2">
      <div className="col md-6">{left}</div>
      <div className="col md-6">{right}</div>
    </div>
  );
};

class PeoplePage extends Component {
  constructor() {
    super();

    this.swapiService = new SwapiService();

    this.state = {
      selectedPerson: 3,
      hasError: false,
    };
  }

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemsList = (
      <ItemsList
        onItemSelected={this.onPersonSelected} // Вывод доп. информации по клику
        getData={this.swapiService.getAllPeople} // Получение данных
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender}, ${birthYear})`
        } // рендер-функция
      />
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return <Row left={itemsList} right={personDetails} />;
  }
}

export default PeoplePage;
