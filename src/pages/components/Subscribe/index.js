import React from 'react';

import SubscribeForm from '../../components/SubscribeForm';

export default function Subscribe() {
  return (
    <>
      <div id="gtco-subscribe">
        <div className="gtco-container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
              <h2 className="cursive-font">Se inscrever</h2>
              <p>Receba as novidades do nosso restaurante</p>
            </div>
          </div>
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2">
              <SubscribeForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
