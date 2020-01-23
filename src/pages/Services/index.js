import React from 'react';
import Loading from '../components/Loading';
import ScrollUpButton from "react-scroll-up-button";
import Menu from '../components/Menu';

export default function Services (){
  return (
    <>
      <Loading />
      <Menu />
      <h2>Services</h2>
      <ScrollUpButton />
    </>
  );
}
