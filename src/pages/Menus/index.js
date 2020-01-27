import React from 'react';

// Components
import Loading from '../components/Loading';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import MakeBy from '../components/MakeBy';
import ScrollUpButton from 'react-scroll-up-button';

// Itens
import Background from '../../images/img_bg_1.jpg';
import Background1 from '../../images/img_1.jpg';
import Background2 from '../../images/img_2.jpg';
import Background3 from '../../images/img_3.jpg';

export default function Menus() {
  return (
    <>
      <Loading />
      <Menu />

      <header
        id="gtco-header"
        class="gtco-cover gtco-cover-sm"
        role="banner"
        style={{ backgroundImage: `url(${Background})` }}
        data-stellar-background-ratio="0.5"
      >
        <div class="overlay"></div>
        <div class="gtco-container">
          <div class="row">
            <div class="col-md-12 col-md-offset-0 text-center">
              <div class="row row-mt-15em">
                <div
                  class="col-md-12 mt-text animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <MakeBy msg={'Saboreie o nosso menu!'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="gtco-section">
        <div class="gtco-container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center gtco-heading">
              <h2 class="cursive-font primary-color">Pratos Populares</h2>
              <p>
                Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num
                copo é motivis de denguis. Quem num gosta di mé, boa gentis num
                é.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
              <a href="images/img_1.jpg" class="fh5co-card-item image-popup">
                <figure>
                  <div class="overlay">
                    <i class="ti-plus"></i>
                  </div>
                  <img src={Background1} alt="img1" class="img-responsive" />
                </figure>
                <div class="fh5co-text">
                  <h2>Bife de Costela com molho</h2>
                  <p>
                    Vide electram sadipscing et per. Aenean aliquam molestie
                    leo, vitae iaculis nisl.
                  </p>
                  <p>
                    <span class="price cursive-font">R$35,69</span>
                  </p>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <a href="images/img_3.jpg" class="fh5co-card-item image-popup">
                <figure>
                  <div class="overlay">
                    <i class="ti-plus"></i>
                  </div>
                  <img src={Background2} alt="img2" class="img-responsive" />
                </figure>
                <div class="fh5co-text">
                  <h2>Hambúrguer com Fritas</h2>
                  <p>
                    Vide electram sadipscing et per. Aenean aliquam molestie
                    leo, vitae iaculis nisl.
                  </p>
                  <p>
                    <span class="price cursive-font">R$22,80</span>
                  </p>
                </div>
              </a>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-6">
              <a href="images/img_5.jpg" class="fh5co-card-item image-popup">
                <figure>
                  <div class="overlay">
                    <i class="ti-plus"></i>
                  </div>
                  <img src={Background3} alt="img3" class="img-responsive" />
                </figure>
                <div class="fh5co-text">
                  <h2>Chilli com Carne</h2>
                  <p>
                    Vide electram sadipscing et per. Aenean aliquam molestie
                    leo, vitae iaculis nisl.
                  </p>
                  <p>
                    <span class="price cursive-font">R$29,40</span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

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
                &ldquo; Delegadis gente finis, bibendum egestas augue arcu ut
                est. Cevadis im ampola pa arma uma pindureta!&rdquo;
              </h1>
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
                    <label for="email" class="sr-only">
                      E-mail
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Seu E-mail"
                    />
                  </div>
                </div>
                <div class="col-md-6 col-sm-6">
                  <button type="submit" class="btn btn-default btn-block">
                    Inscrever
                  </button>
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
