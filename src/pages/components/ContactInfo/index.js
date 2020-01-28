import React from 'react';

export default function() {
  return (
    <>
      <div className="col-md-5 col-md-push-1 animate-box">
        <div className="gtco-contact-info">
          <h3>Informações de Contato</h3>
          <ul>
            <li className="address">
              Rua Ademar Saraiva Leão, 234
              <br /> Alvarenga, São Bernardo do Campo - SP
            </li>
            <li className="phone">
              <a href="tel://1234567890">+1 234 567 890</a>
            </li>
            <li className="email">
              <a href="mailto:contato@hcode.com.br">contato@hcode.com.br</a>
            </li>
            <li className="url">
              <a href="https://www.hcode.com.br">Hcode.com.br</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
