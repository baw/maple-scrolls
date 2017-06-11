import React, { Component } from 'react';

class CharacterListItem extends Component {
  deleteCharacter() {
    this.props.onDeleteCharacter(this.props.name);
  }

  setAsSelected() {
    this.props.onSelectCharacter(this.props.name);
  }

  render() {
    return (
      <li><span className={ this.props.selected ? 'selected' : '' } onClick={ this.setAsSelected.bind(this) }>{ this.props.name }</span> - <span onClick={ this.deleteCharacter.bind(this) }>Delete</span></li>
    );
  }
}

export default CharacterListItem;
