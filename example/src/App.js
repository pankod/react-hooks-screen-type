import React, { Component } from 'react';
import './App.css';

import UseScreenType from 'react-hooks-screen-type';

class App extends Component {
  render() {
    return (
      <div className="App">
        Screen Type: {<UseScreenType />}
      </div>
    );
  }
}

export default App;
