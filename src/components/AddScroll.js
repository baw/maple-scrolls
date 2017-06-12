/* @flow */

import React, { Component } from 'react';

import allScrolls from '../allScrolls';
import TypeaheadScrolls from './TypeaheadScrolls';

class AddScroll extends Component {
  props: {
    characterName: string,
    onAddScroll: (name: string, scrollId: number, numberToAdd: number) => void
  }

  handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    let numberToAdd = parseInt(this.refs.count.value, 0);

    let scrollName = this.refs.scroll.getSelectedScrollName();
    let scrollId = allScrolls.indexOf(scrollName);

    if (scrollId !== -1) {
        this.props.onAddScroll(this.props.characterName, scrollId, numberToAdd);
    }
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit.bind(this) }>
        <label>Scroll <TypeaheadScrolls ref='scroll' scrolls={ allScrolls } /></label>
        <label>Count <input ref='count' type='number' /></label>
        <input type='submit' value='Add' />
      </form>
    );
  }
}

export default AddScroll;
