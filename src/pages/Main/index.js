import React from 'react';
import styles from './styles.css';
import Loading from '../components/Loading';

import Menu from '../components/Menu';
import Header from '../components/Header';
import Section from '../components/Section';
import Features from '../components/Features';
import Counter from '../components/Counter';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import ScrollUpButton from 'react-scroll-up-button';

import Background from '../../images/img_bg_1.jpg';

export default function Main(){
  return (
    <>
      <Loading />

        <div id="page">
          <Menu />
          <Header />
          <Section />
          <Features />

          <div class="gtco-cover gtco-cover-sm" style={{ backgroundImage: `url(${Background})` }}  data-stellar-background-ratio="0.5">
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

          <Counter />
          <Subscribe />
          <Footer />

        </div>

        <ScrollUpButton />
    </>
  );
}
