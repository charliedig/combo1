import React, { Component } from 'react';
import Item from './item';

class Itemgrid extends Component {

  render() {
    return (
      this.props.webitems.map((item) => (
          <Item style={{flex: "1"}} key={item.id} anitem={item}/>
        ))
    );
  }
}

const itemgridstyle = {
    marginTop: '20px'
}

export default Itemgrid;
