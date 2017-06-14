/* @flow */

import React, { Component } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import Highligher from 'react-highlighter';

class TypeaheadScrolls extends Component {
  props: {
    MenuItemAfterComponent?: Object,
    optionTextKey?: string,
    scrolls: Array<string> | Array<Object>
  }

  getSelectedScrollName() {
    return this.refs.scroll.getInstance().state.selected[0];
  }

  filterBy(option: string | Object, searchText: string) {
    let optionText = option;
    searchText = searchText.toLowerCase();

    if (typeof option !== 'string') {
      optionText = option[this.props.optionTextKey];
    }

    optionText = optionText.toLowerCase();

    if (optionText.includes(searchText)) {
      return true;
    } else {
      let split = searchText.split(' ');
      return split.every((splitText) => {
        return optionText.includes(splitText);
      });
    }
  }

  renderMenuItemChildren(result: string, props: Object) {
    let optionText = result;
    if (typeof result !== 'string') {
      optionText = result[this.props.optionTextKey]
    }

    let searchText = props.text.split(' ').filter(function (string) {
      return string !== '' && string !== ' ';
    }).join('|');

    let MenuItemAfterComponent = this.props.MenuItemAfterComponent;
    let regex = new RegExp(searchText, 'i');
    return <span>
      <Highligher search={ regex } >{ optionText }</Highligher>
      { MenuItemAfterComponent !== undefined &&
        <MenuItemAfterComponent option={ result } />
      }
    </span>;
  }

  render() {
    return (
      <Typeahead ref="scroll" labelKey={ this.props.optionTextKey } options={ this.props.scrolls } minLength={ 1 } maxResults={ 5 } filterBy={ this.filterBy.bind(this) } renderMenuItemChildren={ this.renderMenuItemChildren.bind(this) } />
    )
  }
}

export default TypeaheadScrolls;
