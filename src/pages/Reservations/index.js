import React from 'react';

// Components
import Loading from '../components/Loading';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import ReservationForm from '../components/ReservationForm';
import ContactInfo from '../components/ContactInfo';
import ScrollUpButton from 'react-scroll-up-button';
import Header from '../components/Header';

// Props
import bg from '~/images/img_bg_2.jpg';
const msg = 'Reserve uma mesa!';

export default function Reservations() {
  return (
    <>
      <Loading />
      <Menu />

      <Header msg={msg} bg={bg} />

      <div className="gtco-section" style={{ padding: 14 }}>
        <div className="gtco-container">
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-6 animate-box">
                <h3>Reserva de mesa</h3>

                <ReservationForm />
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
