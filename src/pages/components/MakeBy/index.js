import React, {Component} from 'react';

export default class MakeBy extends Component{
  render(){

    const msg = '';

    return <>
      <span class="intro-text-small">Feito por
        <a href="https://valdir.herokuapp.com/" rel="noopener noreferrer" target="_blank">&nbsp;Valdir Silva</a>
      </span>
      <h1 class="cursive-font">{this.props.msg}</h1>
    </>
  }
}
