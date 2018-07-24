import React, { Component } from 'react';
import Search from '../components/search.js'
import Artists from '../components/artists.js'

import './app.css'
class App extends Component {

  render() {

    return (
      <div className="App">
          <Search />
          <Artists />
      </div>
    );
  }
}


export default App;
