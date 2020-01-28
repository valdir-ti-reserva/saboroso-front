import React from 'react';

// Components
import Menu from '../components/Menu';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import MakeBy from '../components/MakeBy';
import Cover2 from '../components/Cover2';
import Section from '../components/Section';
import Loading from '../components/Loading';
import Subscribe from '../components/Subscribe';
import ScrollUpButton from 'react-scroll-up-button';

// Itens
import bg from '../../images/img_bg_1.jpg';
const msg = 'Saboreie o nosso menu!';

export default function Menus() {
  return (
    <>
      <Loading />
      <Menu />
      <Header msg={msg} bg={bg} />
      <Section />
      <Cover2 />
      <Subscribe />
      <Footer />
      <ScrollUpButton />
    </>
  );
}
