/* @flow */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './redux/actions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Maple Scrolls</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.characters
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
