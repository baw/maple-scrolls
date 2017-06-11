/* @flow */

import { createStore } from 'redux';
import persistState from 'redux-localstorage'

import reducer from './reducer';

export default createStore(reducer, persistState());
