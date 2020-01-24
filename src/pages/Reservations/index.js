import React from 'react';
import Loading from '../components/Loading';
import ScrollUpButton from "react-scroll-up-button";
import Menu from '../components/Menu';
import Background from '../../images/img_bg_2.jpg';

export default function Reservations (){
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
                    <h1 class="cursive-font">Reserve uma Mesa!</h1>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </header>

        <div class="gtco-section"  style={{padding: 14}}>
          <div class="gtco-container">
            <div class="row">
              <div class="col-md-12">
                <div class="col-md-6 animate-box">
                <h3>Reserva de mesa</h3>
                          <form action="#">
                              <div class="row form-group">
                                  <div class="col-md-12">
                                      <label for="inputName">Nome</label>
                                      <input type="text" id="inputName" name="name" class="form-control" />
                                  </div>
                              </div>
                              <div class="row form-group">
                                  <div class="col-md-12">
                                      <label for="inputEmail">E-mail</label>
                                      <input type="email" id="inputEmail" name="email" class="form-control" />
                                  </div>
                              </div>
                              <div class="row form-group">
                                  <div class="col-md-12">
                                      <label for="inputPeople">Pessoas</label>
                                      <select id="inputPeople" name="people" class="form-control">
                                          <option value=""> -- selecione -- </option>
                                          <option value="1">1</option>
                                          <option value="2">2</option>
                                          <option value="3">3</option>
                                          <option value="4">4</option>
                                          <option value="5">5+</option>
                                      </select>
                                  </div>
                              </div>
                              <div class="row form-group">
                                  <div class="col-md-12">
                                      <label for="inputDate">Data</label>
                                      <input type="text" id="inputDate" name="date" class="form-control" />
                                  </div>
                              </div>
                              <div class="row form-group">
                                  <div class="col-md-12">
                                      <label for="inputTime">Hora</label>
                                      <input type="text" id="inputTime" name="time" class="form-control" />
                                  </div>
                              </div>

                              <div class="row form-group">
                                  <div class="col-md-12">
                                      <input type="submit" class="btn btn-primary btn-block" value="Reservar Agora" />
                                  </div>
                              </div>
                          </form>
              </div>
              <div class="col-md-5 col-md-push-1 animate-box">

                <div class="gtco-contact-info">
                  <h3>Informações de Contato</h3>
                  <ul>
                    <li class="address">Rua Ademar Saraiva Leão, 234<br/> Alvarenga, São Bernardo do Campo - SP</li>
                    <li class="phone"><a href="tel://1234567890">+1 234 567 890</a></li>
                    <li class="email"><a href="mailto:contato@hcode.com.br">contato@hcode.com.br</a></li>
                    <li class="url"><a href="https://www.hcode.com.br">Hcode.com.br</a></li>
                  </ul>
                </div>


              </div>
              </div>
            </div>
          </div>
        </div>

        <footer id="gtco-footer" role="contentinfo" style={{ backgroundImage: `url(${Background})` }} data-stellar-background-ratio="0.5">
          <div class="overlay"></div>
          <div class="gtco-container">
            <div class="row row-pb-md">

              <div class="col-md-12 text-center">
                <div class="gtco-widget">
                  <h3>Entrar em Contato</h3>
                  <ul class="gtco-quick-contact">
                    <li>
                      <a href="#">
                        <i class="icon-phone"></i> +1 234 567 890</a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icon-mail2"></i> contato@hcode.com.br</a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icon-chat"></i> Chat</a>
                    </li>
                  </ul>
                </div>
                <div class="gtco-widget">
                  <h3>Redes Sociais</h3>
                  <ul class="gtco-social-icons">
                    <li>
                      <a href="https://twitter.com/hcodebr">
                        <i class="icon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/hcodebr">
                        <i class="icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/grupo-hcode/">
                        <i class="icon-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UCjWENuSH2gX55-y7QSZiWxA">
                        <i class="icon-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-12 text-center copyright">
                <p>
                  <small class="block">&copy; 2018 Hcode. Todos os Direitos Reservados.</small>
                  <small class="block">Desenvolvido por
                    <a href="https://www.hcode.com.br" target="_blank">Hcode.com.br</a>
                  </small>
                </p>
              </div>
            </div>

          </div>
        </footer>

      <ScrollUpButton />
    </>
  );
}
