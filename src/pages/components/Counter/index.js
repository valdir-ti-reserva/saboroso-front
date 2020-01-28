import React from 'react';

export default function Counter() {
  return (
    <>
      <div id="gtco-counter" className="gtco-section">
        <div className="gtco-container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
              <h2 className="cursive-font primary-color">Fatos</h2>
              <p>
                Delegadis gente finis, bibendum egestas augue arcu ut est.
                Cevadis im ampola pa arma uma pindureta!
              </p>
            </div>
          </div>

          <div className="row">
            <div
              className="col-md-3 col-sm-6 animate-box"
              data-animate-effect="fadeInUp"
            >
              <div className="feature-center">
                <span
                  className="counter js-counter"
                  data-from="0"
                  data-to="5"
                  data-speed="5000"
                  data-refresh-interval="50"
                >
                  1
                </span>
                <span className="counter-label">Avaliação Média</span>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 animate-box"
              data-animate-effect="fadeInUp"
            >
              <div className="feature-center">
                <span
                  className="counter js-counter"
                  data-from="0"
                  data-to="43"
                  data-speed="5000"
                  data-refresh-interval="50"
                >
                  1
                </span>
                <span className="counter-label">Opções de Pratos</span>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 animate-box"
              data-animate-effect="fadeInUp"
            >
              <div className="feature-center">
                <span
                  className="counter js-counter"
                  data-from="0"
                  data-to="32"
                  data-speed="5000"
                  data-refresh-interval="50"
                >
                  1
                </span>
                <span className="counter-label">Chefes de Cozinha</span>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 animate-box"
              data-animate-effect="fadeInUp"
            >
              <div className="feature-center">
                <span
                  className="counter js-counter"
                  data-from="0"
                  data-to="1985"
                  data-speed="5000"
                  data-refresh-interval="50"
                >
                  1
                </span>
                <span className="counter-label">Desde</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
