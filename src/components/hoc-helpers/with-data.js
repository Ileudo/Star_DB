import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export const withData = (View, getData) => {
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
