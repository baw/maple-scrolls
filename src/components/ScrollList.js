/* @flow */

import React, { Component } from 'react';

class ScrollList extends Component {
  props: {
    scrolls: {
      [number]: number
    }
  }

  render() {
    let scrollIds = Object.keys(this.props.scrolls);
    return (
      <ul>
        {
          scrollIds.map((scrollId) => {
            return <li key={ scrollId }>{ scrollId } - { this.props.scrolls[1] } </li>
          })
        }
      </ul>
    );
  }
}

export default ScrollList;
