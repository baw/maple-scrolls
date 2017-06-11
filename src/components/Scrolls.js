/* @flow */

import React, { Component } from 'react';

import AddScroll from './AddScroll';
import ScrollList from './ScrollList';

class Scrolls extends Component {
  props: {
    characterName: string,
    onAddScroll: (name: string, scrollId: number, numberToAdd: number) => void,
    scrolls: {
      number: number
    }
  }
  render() {
    return (
      <div>
        <h2>Scrolls for: { this.props.characterName }</h2>
        <AddScroll characterName={ this.props.characterName } onAddScroll={ this.props.onAddScroll } />
        <ScrollList scrolls={ this.props.scrolls }/>
      </div>
    );
  }
}

export default Scrolls;
