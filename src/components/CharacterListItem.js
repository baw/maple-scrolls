import React, { Component } from 'react';

class CharacterListItem extends Component {
  deleteCharacter() {
    this.props.onDeleteCharacter(this.props.name);
  }
  render() {
    return (
      <li>{ this.props.name } - <span onClick={ this.deleteCharacter.bind(this) }>Delete</span></li>
    );
  }
}

export default CharacterListItem;
