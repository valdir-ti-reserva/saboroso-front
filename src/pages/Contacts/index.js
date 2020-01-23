import React from 'react';
import Loading from '../components/Loading';
import Menu from '../components/Menu';
import ScrollUpButton from "react-scroll-up-button";

export default function Contacts (){
  return (
    <>
      <Loading />
      <Menu />
      <h2>Contacts</h2>
      <ScrollUpButton />
    </>
  );
}
