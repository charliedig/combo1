import React, { Component } from 'react';

class Announcements extends Component {

  render() {
    return (
      <div>
        <div style={announcestyle}>
            <span>Today Only 50% off all Shoes</span>
        </div>
      </div>
    );
  }
}

const announcestyle = {
  display: 'flex',
  justifyContent: 'center',
  background: 'Black',
  alignItems: 'center',
  color: 'White',
  height: '40px'
}

export default Announcements;
