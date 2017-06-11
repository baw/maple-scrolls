/* @flow */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './redux/actions';
import CharacterList from './components/CharacterList';
import Scrolls from './components/Scrolls';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Maple Scrolls</h1>
        <CharacterList characters={ this.props.characters } onAddCharacter={ this.props.actions.addCharacter } onDeleteCharacter={ this.props.actions.deleteCharacter } selectedCharacter={ this.props.currentCharacter } onSelectCharacter={ this.props.actions.selectCharacter }></CharacterList>
        <Scrolls scrolls={ this.props.characters[this.props.currentCharacter] } characterName={ this.props.currentCharacter } onAddScroll={ this.props.actions.addScrollToCharacter } ></Scrolls>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.characters,
  charactersLength: Object.keys(state.characters).length,
  currentCharacter: state.currentCharacter
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
