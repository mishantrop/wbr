import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();

    const spread = {
      spreadValue: Math.random(),
    };

    this.state = {
      ...spread,
      title: 'Click on me',
    };
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div onClick={() => {
        this.setState({ title: Math.random() });
      }}>
        {this.state.title}
      </div>
    );
  }
}

export default App;
