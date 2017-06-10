/* @flow */

export const ADD_CHARACTER_TYPE = 'ADD_CHARACTER_TYPE';
export const DELETE_CHARACTER_TYPE = 'DELETE_CHARACTER_TYPE';
export const ADD_SCROLL_TO_CHARACTER_TYPE = 'ADD_SCROLL_TO_CHARACTER_TYPE';
export const REMOVE_SCROLL_TO_CHARACTER_TYPE = 'REMOVE_SCROLL_TO_CHARACTER_TYPE';

export type Actionable =
  | { type: 'ADD_CHARACTER_TYPE', name: string }
  | { type: 'DELETE_CHARACTER_TYPE', name: string }
  | { type: 'ADD_SCROLL_TO_CHARACTER_TYPE', name: string, numberToAdd: number, scrollId: number }
  | { type: 'REMOVE_SCROLL_TO_CHARACTER_TYPE', name: string, numberToRemove: number, scrollId: number }

export const ADD_CHARACTER = (name: string): Actionable => {
  return {
    type: ADD_CHARACTER_TYPE,
    name: name
  }
}

export const DELETE_CHARACTER = (name: string): Actionable => {
  return {
    type: DELETE_CHARACTER_TYPE,
    name: name
  }
}

export const ADD_SCROLL_TO_CHARACTER = (name: string, scrollId: number, numberToAdd: number = 1): Actionable => {
  return {
    type: ADD_SCROLL_TO_CHARACTER_TYPE,
    name: name,
    numberToAdd: numberToAdd,
    scrollId: scrollId
  }
}

export const REMOVE_SCROLL_TO_CHARACTER = (name: string, scrollId: number, numberToRemove: number = 1): Actionable => {
  return {
    type: REMOVE_SCROLL_TO_CHARACTER_TYPE,
    name: name,
    numberToRemove: numberToRemove,
    scrollId: scrollId
  }
}
