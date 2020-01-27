import React from 'react';

// Components
import Loading from '../components/Loading';
import Menu from '../components/Menu';
import MakeBy from '../components/MakeBy';
import Features from '../components/Features';
import Footer from '../components/Footer';
import ScrollUpButton from 'react-scroll-up-button';

// Itens
import Background from '../../images/img_bg_1.jpg';
import Subscribe from '../components/Subscribe';

export default function Services() {
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
                  <MakeBy msg={'É um prazer poder servir!'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Features />

      <div
        class="gtco-cover gtco-cover-sm"
        style={{ backgroundImage: `url(${Background})` }}
        data-stellar-background-ratio="0.5"
      >
        <div class="overlay"></div>
        <div class="gtco-container text-center">
          <div class="display-t">
            <div class="display-tc">
              <h1>
                &ldquo; Delegadis gente finis, bibendum egestas augue arcu ut
                est. Cevadis im ampola pa arma uma pindureta!&rdquo;
              </h1>
              <p>&mdash; Mussum, Humorista.</p>
            </div>
          </div>
        </div>
      </div>

      <Subscribe />
      <Footer />
      <ScrollUpButton />
    </>
  );
}
