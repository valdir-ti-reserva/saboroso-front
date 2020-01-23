import React from 'react';
import Loading from '../components/Loading';
import ScrollUpButton from "react-scroll-up-button";
import Menu from '../components/Menu';

export default function Reservations (){
  return (
    <>
      <Loading />
      <Menu />
      <h2>Reservations</h2>
      <ScrollUpButton />
    </>
  );
}
