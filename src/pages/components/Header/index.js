import React, { Component } from 'react';
// import { HeaderStyle } from './styles';
import MakeBy from '../../components/MakeBy';
import FormWrap from '../../components/FormWrap';
const url = window.location.pathname;

export default class Header extends Component {
  render() {
    if (url === '/') {
      return (
        <>
          <header
            id="gtco-header"
            className="gtco-cover gtco-cover-md"
            role="banner"
            style={{
              backgroundImage: `url(${this.props.bg})`,
              backgroundPosition: '50% 0%',
            }}
            data-stellar-background-ratio="0.5"
          >
            <div className="overlay"></div>
            <div className="gtco-container">
              <div className="row">
                <div className="col-md-12 col-md-offset-0 text-left">
                  <div className="row row-mt-15em">
                    <div
                      className="col-md-7 mt-text animate-box"
                      data-animate-effect="fadeInUp"
                    >
                      <MakeBy msg={this.props.msg} />
                    </div>
                    <div
                      className="col-md-4 col-md-push-1 animate-box"
                      data-animate-effect="fadeInRight"
                    >
                      <FormWrap />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </>
      );
    } else {
      return (
        <>
          <header
            id="gtco-header"
            className="gtco-cover gtco-cover-sm"
            role="banner"
            style={{ backgroundImage: `url(${this.props.bg})` }}
            data-stellar-background-ratio="0.5"
          >
            <div className="overlay"></div>
            <div className="gtco-container">
              <div className="row">
                <div className="col-md-12 col-md-offset-0 text-center">
                  <div className="row row-mt-15em">
                    <div
                      className="col-md-12 mt-text animate-box"
                      data-animate-effect="fadeInUp"
                    >
                      <MakeBy msg={this.props.msg} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </>
      );
    }
  }
}
