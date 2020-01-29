import React from 'react';

import ReservationForm from '../ReservationForm';

export default function FormWrap() {
  return (
    <>
      <div className="form-wrap">
        <div className="tab">
          <div className="tab-content">
            <div className="tab-content-inner active" data-content="signup">
              <h3 className="cursive-font">Reserva de mesa</h3>
              <ReservationForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
