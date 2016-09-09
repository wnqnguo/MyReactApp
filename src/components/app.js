import React, { Component } from 'react';
import NavigationBar from './NavigationBar'
import SearchBar from './SearchBar'
import Weekend from './Weekend'
import Header from './Header'
export default class App extends Component {
  render() {
    return (
      <div>
      	<NavigationBar />
      	<Header />
      	<SearchBar />
      	<Weekend />
      </div>
    );
  }
}
