import React from 'react';
import styles from './styles.css';
import Loading from '../components/Loading';

import Menu from '../components/Menu';
import Header from '../components/Header';
import Section from '../components/Section';
import Features from '../components/Features';
import Counter from '../components/Counter';
import Subscribe from '../components/Subscribe';
import Cover2 from '../components/Cover2';
import Footer from '../components/Footer';
import ScrollUpButton from 'react-scroll-up-button';

export default function Main() {
  return (
    <>
      <Loading />

      <div id="page">
        <Menu />
        <Header />
        <Section />
        <Features />
        <Cover2 />
        <Counter />
        <Subscribe />
        <Footer />
      </div>

      <ScrollUpButton />
    </>
  );
}
