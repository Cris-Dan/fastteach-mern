import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Content from './Content';


class App extends Component {
  static get propTypes() {
    return {
      children: PropTypes.object.isRequired
    }
  };
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <Content body={children}></Content>
        </header>
      </div>
    );
  }
}

export default App;
