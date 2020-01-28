import React from 'react';

// Components
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import MakeBy from '../components/MakeBy';
import Cover2 from '../components/Cover2';
import Section from '../components/Section';
import Loading from '../components/Loading';
import Subscribe from '../components/Subscribe';
import ScrollUpButton from 'react-scroll-up-button';

// Itens
import Background from '../../images/img_bg_1.jpg';

export default function Menus() {
  return (
    <>
      <Loading />
      <Menu />

      <header
        id="gtco-header"
        class="gtco-cover gtco-cover-sm"
        role="banner"
        style={{ backgroundImage: `url(${Background})` }}
        data-stellar-background-ratio="0.5"
      >
        <div class="overlay"></div>
        <div class="gtco-container">
          <div class="row">
            <div class="col-md-12 col-md-offset-0 text-center">
              <div class="row row-mt-15em">
                <div
                  class="col-md-12 mt-text animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <MakeBy msg={'Saboreie o nosso menu!'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Section />

      <Cover2 />

      <Subscribe />

      <Footer />

      <ScrollUpButton />
    </>
  );
}
