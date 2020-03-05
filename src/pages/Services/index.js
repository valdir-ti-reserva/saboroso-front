import React from 'react';

// Components
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Cover2 from '../components/Cover2';
import Loading from '../components/Loading';
import Features from '../components/Features';
import Subscribe from '../components/Subscribe';
import ScrollUpButton from 'react-scroll-up-button';
import Header from '../components/Header';

// Props
import bg from '~/images/img_bg_1.jpg';
const msg = 'É um prazer poder servir!';

export default function Services() {
  return (
    <>
      <Loading />
      <Menu />
      <Header msg={msg} bg={bg} />
      <Features />
      <Cover2 />
      <Subscribe />
      <Footer />
      <ScrollUpButton />
    </>
  );
}
