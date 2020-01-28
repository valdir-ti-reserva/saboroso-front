import React, { Component } from 'react';
import { FaCloud, FaTruck, FaSmile } from 'react-icons/fa';
// import { animations } from 'react-animation';
import ScrollAnimation from 'react-animate-on-scroll';
// import FadeIn from 'react-fade-in';

const iconStyle = {
  fontSize: 48,
  marginTop: 18,
};

export default class Features extends Component {
  render() {
    return (
      <>
        <div id="gtco-features">
          <div className="gtco-container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                >
                  <h2 className="cursive-font">Nossos Serviços</h2>
                  <p>
                    Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite
                    então bota uma pinga aí cumpadi!
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div
                  className="feature-center animate-box"
                  data-animate-effect="fadeIn"
                >
                  <span className="icon">
                    <FaSmile style={iconStyle} />
                  </span>
                  <h3>Pessoas Felizes</h3>
                  <p>
                    Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite
                    então bota uma pinga aí cumpadi!
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div
                  className="feature-center animate-box"
                  data-animate-effect="fadeIn"
                >
                  <span className="icon">
                    <FaCloud style={iconStyle} />
                  </span>
                  <h3>Culinária Criativa</h3>
                  <p>
                    Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite
                    então bota uma pinga aí cumpadi!
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div
                  className="feature-center animate-box"
                  data-animate-effect="fadeIn"
                >
                  <span className="icon">
                    <FaTruck style={iconStyle} />
                  </span>
                  <h3>Delivery</h3>
                  <p>
                    Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite
                    então bota uma pinga aí cumpadi!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
