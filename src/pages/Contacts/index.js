import React from 'react';

// Components
import Loading from '../components/Loading';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
// import MakeBy from '../components/MakeBy';
import ScrollUpButton from 'react-scroll-up-button';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';

// Itens
import bg from '~/images/img_bg_3.jpg';
const msg = 'Diga um oi!';

export default function Contacts() {
  return (
    <>
      <Loading />
      <Menu />
      <Header msg={msg} bg={bg} />

      <div className="gtco-section">
        <div className="gtco-container">
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-6 animate-box">
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
