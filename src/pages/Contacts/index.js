import React from 'react';

// Components
import Loading from '../components/Loading';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import ScrollUpButton from "react-scroll-up-button";

// Itens
import Background from '../../images/img_bg_3.jpg';

export default function Contacts (){
  return (
    <>
      <Loading />
      <Menu />

        <header id="gtco-header" class="gtco-cover gtco-cover-sm" role="banner" style={{ backgroundImage: `url(${Background})` }}>
          <div class="overlay"></div>
          <div class="gtco-container">
            <div class="row">
              <div class="col-md-12 col-md-offset-0 text-center">

                <div class="row row-mt-15em">
                  <div class="col-md-12 mt-text animate-box" data-animate-effect="fadeInUp">
                    <span class="intro-text-small">Feito por
                      <a href="https://www.hcode.com.br" target="_blank">Hcode.com.br</a>
                    </span>
                    <h1 class="cursive-font">Diga um oi!</h1>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </header>


        <div class="gtco-section">
          <div class="gtco-container">
            <div class="row">
              <div class="col-md-12">
                <div class="col-md-6 animate-box">
                <h3>Entre em Contato</h3>
                <form action="#">
                  <div class="row form-group">
                    <div class="col-md-12">
                      <label class="sr-only" for="name">Nome</label>
                      <input type="text" id="name" class="form-control" placeholder="Seu nome" />
                    </div>

                  </div>

                  <div class="row form-group">
                    <div class="col-md-12">
                      <label class="sr-only" for="email">E-mail</label>
                      <input type="text" id="email" class="form-control" placeholder="Seu endereço de e-mail" />
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col-md-12">
                      <label class="sr-only" for="message">Mensagem</label>
                      <textarea name="message" id="message" cols="30" rows="10" class="form-control" placeholder="Escreve alguma coisa"></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <input type="submit" value="Enviar" class="btn btn-primary" />
                  </div>

                </form>
              </div>
              <div class="col-md-5 col-md-push-1 animate-box">

                <div class="gtco-contact-info">
                  <h3>Informações de Contato</h3>
                  <ul>
                    <li class="address">Avenida, R. José Versolato, 101 - 12ª andar - Centro, São Bernardo do Campo - SP, 09750-730</li>
                    <li class="phone"><a href="tel://1121497360">(11) 2149-7360</a></li>
                    <li class="email"><a href="mailto:contato@hcode.com.br">contato@hcode.com.br</a></li>
                    <li class="url"><a href="https://www.hcode.com.br">hcode.com.br</a></li>
                  </ul>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>



        <Footer />
      <ScrollUpButton />
    </>
  );
}
