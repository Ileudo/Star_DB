import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './items-list.css';

class ItemsList extends Component {
  constructor() {
    super();
    this.swapiService = new SwapiService();
    this.state = {
      itemsList: null,
    };
  }

  // Если в нашем компоненте нужно вызвать api, самое лучшее место для этого функция componentDidMount, поскольку
  // когда React вызывает эту функцию, это означает, что компонент уже полность проинициализирован, и на нем
  // можно вызывать методы вроде setState. Ну и кроме того, создавать side effects вроде вызова сервера из
  // конструктора считается плохой практикой в ООП.
  componentDidMount() {
    const { getData } = this.props;

    getData().then((itemsList) => {
      this.setState({ itemsList });
    });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      // console.log(this.props.children(item));
      const label = this.props.children(item); // Вывод информации внутри li списка

      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemsList } = this.state;
    if (!itemsList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemsList);
    return <ul className="item-list list-group">{items}</ul>;
  }
}

export default ItemsList;
