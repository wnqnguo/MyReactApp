import React, { Component } from 'react';
import SearchBar from './SearchBar'
import Weekend from './Weekend'
import Header from './Header'
export default class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <Weekend />
      </div>
    );
  }
}
