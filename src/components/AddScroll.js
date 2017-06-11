/* @flow */

import React, { Component } from 'react';

class AddScroll extends Component {
  props: {
    characterName: string,
    onAddScroll: (name: string, scrollId: number, numberToAdd: number) => void
  }

  handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    let numberToAdd = this.refs.count.value;
    let scrollId = this.refs.scroll.value;

    this.props.onAddScroll(this.props.characterName, scrollId, numberToAdd)
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit.bind(this) }>
        <label>Scroll <input ref="scroll" type="number" /></label>
        <label>Count <input ref="count" type="number" /></label>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default AddScroll;
