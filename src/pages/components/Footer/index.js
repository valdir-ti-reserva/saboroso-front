import React from 'react';

import { FaLinkedinIn, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

import Background from '~/images/img_bg_1.jpg';

export default function Footer() {
  return (
    <>
      <footer
        id="gtco-footer"
        role="contentinfo"
        style={{ backgroundImage: `url(${Background})` }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="gtco-container">
          <div className="row row-pb-md">
            <div className="col-md-12 text-center">
              <div className="gtco-widget">
                <h3>Entrar em Contato</h3>
                <ul className="gtco-quick-contact">
                  <li>
                    <a href="#!">
                      <i className="icon-phone"></i> +1 234 567 890
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="icon-mail2"></i> contato@hcode.com.br
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="icon-chat"></i> Chat
                    </a>
                  </li>
                </ul>
              </div>
              <div className="gtco-widget">
                <h3>Redes Sociais</h3>
                <ul className="gtco-social-icons">
                  <li>
                    <a href="https://twitter.com/hcodebr">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/hcodebr">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/valdirti/">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCjWENuSH2gX55-y7QSZiWxA">
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-12 text-center copyright">
              <p>
                <small className="block">
                  &copy; 2020.&nbsp;Direitos Reservados.
                </small>
                <small className="block">
                  Desenvolvido por
                  <a
                    href="https://valdir.herokuapp.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    &nbsp;Valdir Silva
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
