import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './items-list.css';

class ItemsList extends Component {
  constructor() {
    super();
    this.swapiService = new SwapiService();
    this.state = {
      peoplelist: null,
    };
  }

  componentDidMount() {
    // Если в нашем компоненте нужно вызвать api, самое лучшее место для этого функция componentDidMount, поскольку
    // когда React вызывает эту функцию, это означает, что компонент уже полность проинициализирован, и на нем
    // можно вызывать методы вроде setState. Ну и кроме того, создавать side effects вроде вызова сервера из
    // конструктора считается плохой практикой в ООП.
    this.swapiService.getAllPeople().then((peopleList) => {
      this.setState({ peopleList });
    });
  }

  renderItems(arr) {
    return arr.map((person) => {
      return (
        <li
          className="list-group-item"
          key={person.id}
          onClick={() => this.props.onItemSelected(person.id)}
        >
          {person.name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;
    if (!peopleList) {
      return <Spinner />;
    }

    const items = this.renderItems(peopleList);
    return <ul className="item-list list-group">{items}</ul>;
  }
}

export default ItemsList;
