import React from 'react';
import Loading from '../components/Loading';
import Menu from '../components/Menu';
import ScrollUpButton from "react-scroll-up-button";

export default function Menus (){
  return (
    <>
      <Loading />
      <Menu />
      <h2>Menus</h2>
      <ScrollUpButton />
    </>
  );
}
