import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import { withData } from '../hoc-helpers/with-data';

import './items-list.css';

const ItemsList = (props) => {
  const { data, onItemSelected, children: renderLabel } = props;
  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item); // Вывод информации внутри li списка

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });
  return <ul className="item-list list-group">{items}</ul>;
};

// Мы создали пустой компонент-обертку, который вызывает наш основной компонент и передает
// ему все те же свойства, которые он получил сам.
const withData = (View, getData) => {
  return class extends Component {
    constructor() {
      super();

      this.swapiService = new SwapiService();

      this.state = {
        data: null,
      };
    }

    // Если в нашем компоненте нужно вызвать api, самое лучшее место для этого функция
    // componentDidMount, поскольку когда React вызывает эту функцию, это означает,
    // что компонент уже полность проинициализирован, и на нем можно вызывать методы
    // вроде setState. Ну и кроме того, создавать side effects вроде вызова сервера из
    // конструктора считается плохой практикой в ООП.

    componentDidMount() {
      getData().then((data) => {
        this.setState({ data });
      });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

const { getAllPeople } = new SwapiService();

export default withData(ItemsList, getAllPeople);
