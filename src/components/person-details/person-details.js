import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './person-details.css';

class PersonDetails extends Component {
  constructor() {
    super();

    this.swapiService = new SwapiService();

    this.state = {
      person: null,
      loading: true,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      console.log('componentDidUpdate');
      this.updatePerson();
    }
  }

  onPersonLoaded = (person) => {
    this.setState({ person, loading: false });
  };

  updatePerson() {
    console.log('updatePerson');
    const { personId } = this.props;

    if (!personId) {
      return;
    }

    this.setState({ loading: true });

    this.swapiService.getPerson(personId).then((person) => {
      console.log('Receive data');
      console.log(this.state);
      this.onPersonLoaded(person);
      console.log(this.state);
    });
  }

  render() {
    console.log('PersonDetails render');
    const { person, loading } = this.state;
    if (!person) {
      return <span>Select a person from a list</span>;
    }

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PersonDetailsView person={person} /> : null;

    return (
      <div className="person-details card">
        {spinner}
        {content}
      </div>
    );
  }
}

const PersonDetailsView = ({ person }) => {
  console.log('PersonDetailsView render');
  const { id, name, gender, birthYear, eyeColor } = person;

  return (
    <React.Fragment>
      <img
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
      />

      <div className="card-body">
        <h4>
          {name} {id}
        </h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default PersonDetails;
