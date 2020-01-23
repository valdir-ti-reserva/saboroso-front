import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import $ from 'jquery';

import { Load } from './styles';

export default class Loading extends Component{

  componentDidMount(){
    $(findDOMNode(this)).stop( true, true ).fadeOut('slow');
  }

  render(){
    return <Load />
  }
}
