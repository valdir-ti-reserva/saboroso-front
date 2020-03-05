import React from 'react';
import Background from '~/images/img_bg_1.jpg';

export default function Cover2() {
  return (
    <div
      className="gtco-cover gtco-cover-sm"
      style={{ backgroundImage: `url(${Background})` }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="gtco-container text-center">
        <div className="display-t">
          <div className="display-tc">
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
