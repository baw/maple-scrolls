/* @flow */

import React, { Component } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import Highligher from 'react-highlighter';

import allScrolls from '../allScrolls';

class AddScroll extends Component {
  props: {
    characterName: string,
    onAddScroll: (name: string, scrollId: number, numberToAdd: number) => void
  }

  filterBy(option: string, searchText: string) {
    searchText = searchText.toLowerCase();
    option = option.toLowerCase();

    if (option.includes(searchText)) {
      return true;
    } else {
      let split = searchText.split(' ');
      return split.every((splitText) => {
        return option.includes(splitText);
      });
    }
  }

  handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    let numberToAdd = this.refs.count.value;

    let scrollName = this.refs.scroll.getInstance().state.selected[0];
    let scrollId = allScrolls.indexOf(scrollName);

    if (scrollId !== -1) {
        this.props.onAddScroll(this.props.characterName, scrollId, numberToAdd);
    }
  }

  renderMenuItemChildren(result: string, props: Object) {
    let searchText = props.text.split(' ').filter(function (string) {
      return string !== '' && string !== ' ';
    }).join('|');

    let regex = new RegExp(searchText, 'i');
    return <Highligher search={ regex } >{ result }</Highligher>;
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit.bind(this) }>
        <label>Scroll <Typeahead ref="scroll" options={ allScrolls } minLength={ 1 } maxResults={ 5 } filterBy={ this.filterBy } renderMenuItemChildren={ this.renderMenuItemChildren } /></label>
        <label>Count <input ref="count" type="number" /></label>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default AddScroll;
