import React from 'react';

// Components
import Loading from '../components/Loading';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import MakeBy from '../components/MakeBy';
import ScrollUpButton from 'react-scroll-up-button';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

// Itens
import Background from '../../images/img_bg_3.jpg';

export default function Contacts() {
  return (
    <>
      <Loading />
      <Menu />

      <header
        id="gtco-header"
        class="gtco-cover gtco-cover-sm"
        role="banner"
        style={{ backgroundImage: `url(${Background})` }}
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
                  <MakeBy msg={'Diga um oi!'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="gtco-section">
        <div class="gtco-container">
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6 animate-box">
                <ContactForm />
              </div>

              <ContactInfo />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollUpButton />
    </>
  );
}
