/* @flow */

import React, { Component } from 'react';

import AddCharacter from './AddCharacter';
import CharacterListItem from './CharacterListItem';

class CharacterList extends Component {
  props: {
    characters: {
      [string]: number
    },
    onAddCharacter: (name: string) => void,
    onDeleteCharacter: (name: string) => void,
    onSelectCharacter: (name: string) => void,
    selectedCharacter: string
  }

  render() {
    return (
      <div>
        <h2>Characters:</h2>
        <AddCharacter onAddCharacter={ this.props.onAddCharacter }></AddCharacter>
        <ul>
          {
            Object.keys(this.props.characters).map((name) => {
              let selected = name === this.props.selectedCharacter;
              return <CharacterListItem key={ name } name={ name } onDeleteCharacter={ this.props.onDeleteCharacter } onSelectCharacter={ this.props.onSelectCharacter } selected={ selected }/>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default CharacterList;
