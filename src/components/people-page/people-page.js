import React, { Component } from 'react';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator/error-indicator';
import ItemsList from '../items-list';
import PersonDetails from '../person-details';
import './people-page.css';

class PeoplePage extends Component {
  constructor() {
    super();

    this.state = {
      selectedPerson: 3,
      hasError: false,
    };
  }

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  componentDidCatch(error, info) {
    debugger;
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="row mb-2">
        <div className="col md-6">
          <ItemsList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col md-6">
          <PersonDetails personId={this.state.selectedPerson} />
          <ErrorButton />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
