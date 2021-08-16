import React, { Component } from 'react';

class ErrorButton extends Component {
  constructor() {
    super();

    this.state = {
      renderError: false,
    };
  }

  render() {
    console.log('render');
    if (this.state.renderError) {
      this.foo.bar = 0;
    }

    return (
      <button
        className="error-button btn btn-danger btn-lg"
        onClick={() => this.setState({ renderError: true })}
      >
        Throw Error
      </button>
    );
  }
}

export default ErrorButton;
