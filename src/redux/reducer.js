/* @flow */

import {
  type Actionable,
  ADD_CHARACTER_TYPE,
  DELETE_CHARACTER_TYPE,
  ADD_SCROLL_TO_CHARACTER_TYPE,
  REMOVE_SCROLL_FROM_CHARACTER_TYPE,
  SELECT_CHARACTER
} from './actions';

type state = {
  characters: {
    [string]: {
      [number]: number
    }
  },
  currentCharacter: string
}

const initalState: state = {
  characters: {},
  currentCharacter: ""
}

export default function (state: state = initalState, action: Actionable) {
  let character = state.characters[action.name];
  let newState = Object.assign({}, state);

  switch (action.type) {
    case ADD_CHARACTER_TYPE:
      if (character === undefined) {
        newState.characters = Object.assign({}, newState.characters, { [action.name]: {} });

        return newState;
      }

      return state;
    case DELETE_CHARACTER_TYPE:
      newState.characters = Object.assign({}, newState.characters);
      delete newState.characters[action.name];

      return newState;
    case ADD_SCROLL_TO_CHARACTER_TYPE:
      if (character !== undefined) {
        newState.characters = Object.assign({}, newState.characters);
        newState.characters[action.name] = Object.assign({}, newState.characters[action.name]);
        newState.characters[action.name][action.scrollId] = (newState.characters[action.name][action.scrollId] || 0) + action.numberToAdd;
        return newState;
      }

      return state;
    case REMOVE_SCROLL_FROM_CHARACTER_TYPE:
      if (character !== undefined) {
        newState.characters = Object.assign({}, newState.characters);
        newState.characters[action.name] = Object.assign({}, newState.characters[action.name]);

        if (newState.characters[action.name][action.scrollId] !== undefined) {
          newState.characters[action.name][action.scrollId] -= action.numberToRemove;
        }
      }

      return state;
    case SELECT_CHARACTER:
      if (character !== undefined) {
        newState.currentCharacter = action.name;
        return newState;
      }

      return state;
    default:
      return state;
  }
}
