import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import './App.css';
import Main from './components/MainComponent.js';

class App extends Component {

 
  
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
