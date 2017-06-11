/* @flow */

export const ADD_CHARACTER_TYPE = 'ADD_CHARACTER_TYPE';
export const DELETE_CHARACTER_TYPE = 'DELETE_CHARACTER_TYPE';
export const ADD_SCROLL_TO_CHARACTER_TYPE = 'ADD_SCROLL_TO_CHARACTER_TYPE';
export const REMOVE_SCROLL_FROM_CHARACTER_TYPE = 'REMOVE_SCROLL_FROM_CHARACTER_TYPE';
export const SELECT_CHARACTER = 'SELECT_CHARACTER';

export type Actionable =
  | { type: 'ADD_CHARACTER_TYPE', name: string }
  | { type: 'DELETE_CHARACTER_TYPE', name: string }
  | { type: 'ADD_SCROLL_TO_CHARACTER_TYPE', name: string, numberToAdd: number, scrollId: number }
  | { type: 'REMOVE_SCROLL_FROM_CHARACTER_TYPE', name: string, numberToRemove: number, scrollId: number }
  | { type: 'SELECT_CHARACTER', name: string }

export const addCharacter = (name: string): Actionable => {
  return {
    type: ADD_CHARACTER_TYPE,
    name: name
  };
}

export const deleteCharacter = (name: string): Actionable => {
  return {
    type: DELETE_CHARACTER_TYPE,
    name: name
  };
}

export const addScrollToCharacter = (name: string, scrollId: number, numberToAdd: number = 1): Actionable => {
  return {
    type: ADD_SCROLL_TO_CHARACTER_TYPE,
    name: name,
    numberToAdd: numberToAdd,
    scrollId: scrollId
  };
}

export const removeScrollFromCharacter = (name: string, scrollId: number, numberToRemove: number = 1): Actionable => {
  return {
    type: REMOVE_SCROLL_FROM_CHARACTER_TYPE,
    name: name,
    numberToRemove: numberToRemove,
    scrollId: scrollId
  };
}

export const selectCharacter = (name: string) => {
  return {
    type: SELECT_CHARACTER,
    name: name
  };
}
