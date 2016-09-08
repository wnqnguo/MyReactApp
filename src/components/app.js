import React, { Component } from 'react';
import NavigationBar from './NavigationBar'
import SearchBar from './SearchBar'
export default class App extends Component {
  render() {
    return (
      <div>
      	<NavigationBar />
      	<SearchBar />
      </div>
    );
  }
}
