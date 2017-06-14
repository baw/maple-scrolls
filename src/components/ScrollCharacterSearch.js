/* @flow */

import React, { Component } from 'react';

import allScrolls from '../allScrolls';
import TypeaheadScrolls from './TypeaheadScrolls';

type Props = {
  characters: {
    [string]: {
      [number]: number
    }
  }
}

let AfterComponent = (props) => {
  let characterName = props.option.characterName;
  return (
    <span> - { characterName }</span>
  );
}

type scroll = {
  id: number,
  scrollName: string,
  characterName: string
}

class ScrollCharacterSearch extends Component {
  props: Props

  state: {
    scrolls: Array<scroll>
  }

  constructor(props: Props) {
    super(props);

    let scrolls = Object.keys(props.characters).reduce((scrolls, characterName: string) => {
      let characterScrolls = props.characters[characterName];

      characterScrolls = Object.keys(characterScrolls).map((scrollIdString: string) => {
        let scrollId = parseInt(scrollIdString, 10);
        return {
          id: scrollId,
          scrollName: allScrolls[scrollId],
          characterName: characterName
        };
      });

      return scrolls.concat(characterScrolls);
    }, []);
    console.log(scrolls);

    this.state = {
      scrolls: scrolls
    };
  }

  render() {
    return (
      <TypeaheadScrolls MenuItemAfterComponent={ AfterComponent } optionTextKey='scrollName' scrolls={ this.state.scrolls } />
    );
  }
}

export default ScrollCharacterSearch;
