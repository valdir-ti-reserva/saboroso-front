import styled from 'styled-components';

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  padding: 20px 0;
  z-index: 1001;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  line-height: 1.7;

  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }

  #gtco-logo {
    font-size: 20px;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-weight: bold;
  }

  #gtco-logo em {
    color: #fbb448;
  }

  & a {
    padding: 5px 10px;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
  & ul {
    padding: 0;
    margin: 2px 0 0 0;
  }
  & ul li {
    padding: 0;
    margin: 0;
    list-style: none;
    display: inline;
  }
  & ul li a {
    font-size: 16px;
    padding: 30px 10px;
    color: rgba(255, 255, 255, 0.7);
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
  }
  & ul li a:hover,
  & ul li a:focus,
  & ul li a:active {
    color: white;
  }
  & ul li.has-dropdown {
    position: relative;
  }
  & ul li.has-dropdown .dropdown {
    width: 190px;
    -webkit-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
    z-index: 1002;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 40px;
    left: 0;
    text-align: left;
    background: #fff;
    padding: 20px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    border-radius: 4px;
    -webkit-transition: 0s;
    -o-transition: 0s;
    transition: 0s;
  }
  & ul li.has-dropdown .dropdown:before {
    bottom: 100%;
    left: 40px;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: #fff;
    border-width: 8px;
    margin-left: -8px;
  }
  & ul li.has-dropdown .dropdown li {
    display: block;
    margin-bottom: 7px;
  }
  & ul li.has-dropdown .dropdown li:last-child {
    margin-bottom: 0;
  }
  & ul li.has-dropdown .dropdown li a {
    padding: 2px 0;
    display: block;
    color: #999999;
    line-height: 1.2;
    text-transform: none;
    font-size: 15px;
  }
  & ul li.has-dropdown .dropdown li a:hover {
    color: #fbb448;
  }
  & ul li.has-dropdown .dropdown li.active > a {
    color: #000 !important;
  }
  & ul li.has-dropdown:hover a,
  & ul li.has-dropdown:focus a {
    color: #fff;
  }
  & ul li.btn-cta a {
    color: #fbb448;
  }
  & ul li.btn-cta a span {
    border: 2px solid rgba(255, 255, 255, 0.5);
    padding: 4px 20px;
    color: #fff;
    display: -moz-inline-stack;
    display: inline-block;
    zoom: 1;
    *display: inline;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    border-radius: 4px;
  }
  & ul li.btn-cta a:hover span {
    background: #fff;
    color: #fbb448;
  }
  & ul li.active > a {
    color: #fbb448 !important;
  }
`;
