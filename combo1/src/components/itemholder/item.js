import React, { Component } from 'react';

class Item extends Component {

  render() {
    return (
      <div>
        <img src={this.props.anitem.imgsrc} alt="Smiley face" height="410" width="360"/>
      </div>
    );
  }
}

export default Item;
