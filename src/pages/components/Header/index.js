import React, { Component } from 'react';
// import { HeaderStyle } from './styles';
import Background from '../../../images/img_bg_1.jpg';
import MakeBy from '../../components/MakeBy';
import ReservationForm from '../ReservationForm';

export default class Header extends Component {
  render() {
    return (
      <>
        <header
          id="gtco-header"
          class="gtco-cover gtco-cover-md"
          role="banner"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundPosition: '50% 0%',
          }}
          data-stellar-background-ratio="0.5"
        >
          <div class="overlay"></div>
          <div class="gtco-container">
            <div class="row">
              <div class="col-md-12 col-md-offset-0 text-left">
                <div class="row row-mt-15em">
                  <div
                    class="col-md-7 mt-text animate-box"
                    data-animate-effect="fadeInUp"
                  >
                    <MakeBy msg={'Restaurante Saboroso!'} />
                  </div>
                  <div
                    class="col-md-4 col-md-push-1 animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div class="form-wrap">
                      <div class="tab">
                        <div class="tab-content">
                          <div
                            class="tab-content-inner active"
                            data-content="signup"
                          >
                            <h3 class="cursive-font">Reserva de mesa</h3>

                            <ReservationForm />
                          </div>
                        </div>
                      </div>
                    </div>
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
