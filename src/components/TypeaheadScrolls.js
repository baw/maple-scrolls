/* @flow */

import React, { Component } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import Highligher from 'react-highlighter';

class TypeaheadScrolls extends Component {
  props: {
    scrolls: Array<string>
  }

  getSelectedScrollName() {
    return this.refs.scroll.getInstance().state.selected[0];
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

  renderMenuItemChildren(result: string, props: Object) {
    let searchText = props.text.split(' ').filter(function (string) {
      return string !== '' && string !== ' ';
    }).join('|');

    let regex = new RegExp(searchText, 'i');
    return <Highligher search={ regex } >{ result }</Highligher>;
  }

  render() {
    return (
      <Typeahead ref="scroll" options={ this.props.scrolls } minLength={ 1 } maxResults={ 5 } filterBy={ this.filterBy } renderMenuItemChildren={ this.renderMenuItemChildren } />
    )
  }
}

export default TypeaheadScrolls;
