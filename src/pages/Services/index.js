import React from 'react';

// Components
import Loading from '../components/Loading';
import ScrollUpButton from "react-scroll-up-button";
import Menu from '../components/Menu';
import Footer from '../components/Footer';

// Itens
import Background from '../../images/img_bg_1.jpg';

export default function Services (){
  return (
    <>
      <Loading />
      <Menu />

      <header id="gtco-header" class="gtco-cover gtco-cover-sm" role="banner" style={{ backgroundImage: `url(${Background})` }} data-stellar-background-ratio="0.5">
          <div class="overlay"></div>
          <div class="gtco-container">
            <div class="row">
              <div class="col-md-12 col-md-offset-0 text-center">


                <div class="row row-mt-15em">
                  <div class="col-md-12 mt-text animate-box" data-animate-effect="fadeInUp">
                    <span class="intro-text-small">Feito por
                      <a href="https://www.hcode.com.br" target="_blank">Hcode.com.br</a>
                    </span>
                    <h1 class="cursive-font">É um prazer poder servir!</h1>
                  </div>

                </div>


              </div>
            </div>
          </div>
        </header>

        <div id="gtco-features">
          <div class="gtco-container">
            <div class="row">
              <div class="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
                <h2 class="cursive-font">Nossos Serviços</h2>
                <p>Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi!</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col-sm-6">
                <div class="feature-center animate-box" data-animate-effect="fadeIn">
                  <span class="icon">
                    <i class="ti-face-smile"></i>
                  </span>
                  <h3>Pessoas Felizes</h3>
                  <p>Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi!</p>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="feature-center animate-box" data-animate-effect="fadeIn">
                  <span class="icon">
                    <i class="ti-thought"></i>
                  </span>
                  <h3>Culinária Criativa</h3>
                  <p>Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi!</p>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="feature-center animate-box" data-animate-effect="fadeIn">
                  <span class="icon">
                    <i class="ti-truck"></i>
                  </span>
                  <h3>Delivery</h3>
                  <p>Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi!</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col-sm-6">
                <div class="feature-center animate-box" data-animate-effect="fadeIn">
                  <span class="icon">
                    <i class="ti-face-smile"></i>
                  </span>
                  <h3>Pessoas Felizes</h3>
                  <p>Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi!</p>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="feature-center animate-box" data-animate-effect="fadeIn">
                  <span class="icon">
                    <i class="ti-thought"></i>
                  </span>
                  <h3>Culinária Criativa</h3>
                  <p>Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi!</p>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="feature-center animate-box" data-animate-effect="fadeIn">
                  <span class="icon">
                    <i class="ti-truck"></i>
                  </span>
                  <h3>Delivery</h3>
                  <p>Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi!</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="gtco-cover gtco-cover-sm" style={{ backgroundImage: `url(${Background})` }} data-stellar-background-ratio="0.5">
          <div class="overlay"></div>
          <div class="gtco-container text-center">
            <div class="display-t">
              <div class="display-tc">
                <h1>&ldquo; Delegadis gente finis, bibendum egestas augue arcu ut est. Cevadis im ampola pa arma uma pindureta!&rdquo;</h1>
                <p>&mdash; Mussum, Humorista.</p>
              </div>
            </div>
          </div>
        </div>

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
                <form class="form-inline">
                  <div class="col-md-6 col-sm-6">
                    <div class="form-group">
                      <label for="email" class="sr-only">E-mail</label>
                      <input type="email" class="form-control" id="email" placeholder="Seu E-mail" />
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6">
                    <button type="submit" class="btn btn-default btn-block">Inscrever</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Footer />

      <ScrollUpButton />
    </>
  );
}
