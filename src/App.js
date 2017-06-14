/* @flow */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap';

import * as actions from './redux/actions';
import CharacterList from './components/CharacterList';
import Scrolls from './components/Scrolls';
import ScrollCharacterSearch from './components/ScrollCharacterSearch';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>

          <Row>
            <Col xs={ 8 } md={ 8 }>
              <h1>Maple Scrolls</h1>
            </Col>
            <Col xs={ 4 } md={ 4 }>
              <ScrollCharacterSearch characters={ this.props.characters } />
            </Col>
          </Row>
          <Row>
            <Col xs={ 12 } md={ 6 }>
              <CharacterList characters={ this.props.characters } onAddCharacter={ this.props.actions.addCharacter } onDeleteCharacter={ this.props.actions.deleteCharacter } selectedCharacter={ this.props.currentCharacter } onSelectCharacter={ this.props.actions.selectCharacter }></CharacterList>
            </Col>
            <Col xs={ 12 } md={ 6 }>
              <Scrolls scrolls={ this.props.characters[this.props.currentCharacter] } characterName={ this.props.currentCharacter } onAddScroll={ this.props.actions.addScrollToCharacter } ></Scrolls>
            </Col>
          </Row>
        </Grid>
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
