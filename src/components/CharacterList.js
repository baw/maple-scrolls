import React, { Component } from 'react';

import AddCharacter from './AddCharacter';

class CharacterList extends Component {
  render() {
    return (
      <div>
        <AddCharacter onAddCharacter={ this.props.onAddCharacter }></AddCharacter>
        Characters:
        <ul>
          {
            Object.keys(this.props.characters).map(function (name) {
              return <li key={ name }>{ name }</li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default CharacterList;
