import React, { Component } from 'react';

import SideNav from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';

export default class Main extends Component {
  render() {
    return (
      <>
        <TopNavBar />
        <SideNav />
        <h2>Component Main</h2>
      </>
    );
  }
}
