import React from 'react';
import { Nav } from './styles';

export default function Menu() {
  return (
    <>
      <Nav role="navigation">
        <div className="gtco-container">
          <div className="row">
            <div className="col-sm-4 col-xs-12">
              <div id="gtco-logo">
                <a href="/">
                  Saboroso
                  <em>!</em>
                </a>
              </div>
            </div>
            <div className="col-xs-8 text-right menu-1">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/menus">Menu</a>
                </li>
                <li>
                  <a href="/services">Serviços</a>
                </li>
                <li>
                  <a href="/contacts">Contato</a>
                </li>
                <li>
                  <a href="/reservations">Reserva</a>
                </li>
                <li className="btn-cta">
                  <a href="/admin">
                    <span>Admin</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Nav>
    </>
  );
}
