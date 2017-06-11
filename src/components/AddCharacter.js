/* @flow */

import React, { Component } from 'react';

class AddCharacter extends Component {
  props: {
    onAddCharacter: (name: string) => void
  }

  onKeyPressHandler(event) {
    if (event.key === 'Enter') {
      let name = this.refs.input.value;
      this.props.onAddCharacter(name);

      this.refs.input.value = '';
    }
  }

  render() {
    return (
      <div>
        <input ref="input" onKeyPress={ this.onKeyPressHandler.bind(this) } placeholder="Add Character" type="text"/>
      </div>
    );
  }
}

export default AddCharacter;
