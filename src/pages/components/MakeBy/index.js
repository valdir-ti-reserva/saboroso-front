import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

export default class MakeBy extends Component {
  render() {
    return (
      <>
        <FadeIn>
          <span className="intro-text-small">
            Feito por
            <a
              href="https://valdir.herokuapp.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              &nbsp;Valdir Silva
            </a>
          </span>
          <h1 className="cursive-font">{this.props.msg}</h1>
        </FadeIn>
      </>
    );
  }
}
