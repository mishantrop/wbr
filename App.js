import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    text: PropTypes.string,
  }

  static defaultProps = {
    text: 'Default text',
  }

  constructor(props) {
    super();

    const spread = {
      spreadValue: Math.random(),
    };

    this.state = {
      ...spread,
      title: props.text,
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
