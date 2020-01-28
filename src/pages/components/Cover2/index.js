import React from 'react';
import Background from '../../../images/img_bg_1.jpg';

export default function Cover2() {
  return (
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
              &ldquo; Delegadis gente finis, bibendum egestas augue arcu ut est.
              Cevadis im ampola pa arma uma pindureta!&rdquo;
            </h1>
            <p>&mdash; Mussum, Humorista.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
