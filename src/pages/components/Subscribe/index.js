import React from 'react';

import SubscribeForm from '../../components/SubscribeForm';

export default function Subscribe() {
  return (
    <>
      <div id="gtco-subscribe">
        <div class="gtco-container">
          <div class="row animate-box">
            <div class="col-md-8 col-md-offset-2 text-center gtco-heading">
              <h2 class="cursive-font">Se inscrever</h2>
              <p>Receba as novidades do nosso restaurante</p>
            </div>
          </div>
          <div class="row animate-box">
            <div class="col-md-8 col-md-offset-2">
              <SubscribeForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
