/* @flow */

import React, { Component } from 'react';

import allScrolls from '../allScrolls';

class ScrollList extends Component {
  props: {
    scrolls: {
      [number]: number
    }
  }

  render() {
    let scrollIds = Object.keys(this.props.scrolls || {});
    return (
      <ul>
        {
          scrollIds.map((scrollId) => {
            return <li key={ scrollId }>{ allScrolls[scrollId] } - { this.props.scrolls[scrollId] } </li>
          })
        }
      </ul>
    );
  }
}

export default ScrollList;
