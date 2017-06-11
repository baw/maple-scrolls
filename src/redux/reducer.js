/* @flow */

import {
  type Actionable,
  ADD_CHARACTER_TYPE,
  DELETE_CHARACTER_TYPE,
  ADD_SCROLL_TO_CHARACTER_TYPE,
  REMOVE_SCROLL_FROM_CHARACTER_TYPE
} from './actions';

type state = {
  characters: {
    [string]: {
      [number]: number
    }
  }
}

const initalState: state = {
  characters: {}
}

export default function (state: state = initalState, action: Actionable) {
  let character = state.characters[action.name];
  let scroll;
  switch (action.type) {
    case ADD_CHARACTER_TYPE:
      if (character === undefined) {
        state.characters[action.name] = {};
      }

      return state;
    case DELETE_CHARACTER_TYPE:
      delete state.characters[action.name];

      return state;
    case ADD_SCROLL_TO_CHARACTER_TYPE:
      character = state.characters[action.name];

      if (character !== undefined) {
        character[action.scrollId] = (character[action.scrollId] || 0) + action.numberToAdd;
      }

      return state;
    case REMOVE_SCROLL_FROM_CHARACTER_TYPE:
      if (character !== undefined) {
        scroll = character[action.scrollId];

        if (scroll !== undefined) {
          character[action.scrollId] -= action.numberToRemove;
        }
      }

      return state;
    default:
      return state
  }
}
