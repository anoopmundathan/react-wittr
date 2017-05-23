import React, {Component} from 'react';

import {Header, Main} from './Wittr';

class App extends Component {
  render() {
    return(
      <div>
        <h1>Hello World</h1>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
