import React from 'react';

// Components
import Loading from '../components/Loading';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import MakeBy from '../components/MakeBy';
import ScrollUpButton from "react-scroll-up-button";

// Itens
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

                   <MakeBy msg={'Reserve uma Mesa!'}/>

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

        <Footer />

      <ScrollUpButton />
    </>
  );
}
