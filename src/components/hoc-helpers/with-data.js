import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

//withData это компонент, который занимается тем, что получает данные и отображает состояние в
// в правильном виде. То если данные всё еще загружаются, отображается спиннер. А если уже
// загружены, отображаются данные. И ещё мы хотели добавить в этот компонент Error Handler.
const withData = (AnyComponent) => {
  return class extends Component {
    constructor() {
      super();

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
      this.update();
    }

    componentDidUpdate(prevProps) {
      // Если функция getData, которая приходит из сервиса, обновилась, то обновляем компонент.
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    update() {
      //Изначально этот компонент получал функцию getData как внешний аргумент. Но теперь мы при
      // помощи функции withSwapiService научились передавать нужный метод сервиса в компонент,
      // да еще и под нужным именем. Поэтому в этом компоненте нам теперь не нужно передавать
      // getData в явном виде. Вместо этого возьмем getData из props.
      this.props.getData().then((data) => {
        this.setState({ data });
      });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }

      return <AnyComponent {...this.props} data={data} />;
    }
  };
};

export { withData };
