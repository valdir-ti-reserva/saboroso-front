import styled from 'styled-components';

export const Header = styled.header`
  #gtco-header {
    background: #4d4d4d;
  }
  @media screen and (max-width: 992px) {
    #gtco-header.gtco-cover {
      height: inherit !important;
      padding: 3em 0 !important;
    }
  }
  @media screen and (max-width: 480px) {
    #gtco-header .text-left {
      text-align: center !important;
    }
  }
  @media screen and (max-width: 480px) {
    #gtco-header .btn {
      display: block;
      width: 100%;
    }
  }
  #gtco-header .mt-text {
    margin-top: 7em;
    margin-bottom: 3em;
  }
  @media screen and (max-width: 768px) {
    #gtco-header .mt-text {
      margin-top: 0;
    }
  }
  #gtco-header .intro-text-small {
    font-size: 14px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: .15em;
    display: block;
    margin-bottom: 10px;
  }
  #gtco-header h1, #gtco-header h2 {
    margin: 0;
    padding: 0;
    color: white;
  }
  #gtco-header h1 {
    margin-bottom: 0px;
    font-size: 64px;
    line-height: 1.5;
    font-weight: 300;
    font-family: "Kaushan Script", cursive !important;
  }
  @media screen and (max-width: 768px) {
    #gtco-header h1 {
      font-size: 34px;
      line-height: 1.2;
      margin-bottom: 10px;
    }
  }
  #gtco-header h2 {
    font-weight: 300;
    font-size: 22px;
    line-height: 1.5;
    margin-bottom: 30px;
  }
  #gtco-header .form-wrap {
    border-top: 10px solid #FBB448;
    position: relative;
    width: 100%;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
  }
  #gtco-header .form-wrap h3 {
    font-family: "Kaushan Script", cursive;
  }
  #gtco-header .form-wrap .tab-menu {
    padding: 0 !important;
    margin: 0 0 -10px 0 !important;
    width: 100%;
    float: left;
    z-index: 12;
    position: relative;
  }
  #gtco-header .form-wrap .tab-menu li {
    padding: 0;
    margin: 0;
    list-style: none;
    display: inline;
    float: left;
    width: 50%;
    text-align: center;
  }
  #gtco-header .form-wrap .tab-menu li a {
    padding: 10px 20px 20px 20px;
    float: left;
    width: 100%;
    display: block;
    background: rgba(255, 255, 255, 0.5);
    color: #1a1a1a;
  }
  #gtco-header .form-wrap .tab-menu li a:hover {
    color: #1a1a1a;
  }
  #gtco-header .form-wrap .tab-menu li.active a {
    display: block;
    padding: 10px 20px 20px 20px;
    background: #fff;
    color: #FBB448;
  }
  #gtco-header .form-wrap .tab-menu li.gtco-first a {
    border-top-left-radius: 7px;
  }
  #gtco-header .form-wrap .tab-menu li.gtco-second a {
    border-top-right-radius: 7px;
  }
  #gtco-header .form-wrap .tab-content {
    z-index: 10;
    position: relative;
    clear: both;
    background: rgba(0, 0, 0, 0.5);
    padding: 30px;
  }
  #gtco-header .form-wrap .tab-content h3 {
    color: #fff;
  }
  #gtco-header .form-wrap .tab-content label {
    color: rgba(255, 255, 255, 0.8);
  }
  #gtco-header .form-wrap .tab-content .tab-content-inner {
    display: none;
  }
  #gtco-header .form-wrap .tab-content .tab-content-inner.active {
    display: block;
  }
  #gtco-header .form-wrap .tab-content .form-control {
    color: #fff !important;
    border: 2px solid rgba(255, 255, 255, 0.2);
  }
  #gtco-header .form-wrap .tab-content .form-control option {
    color: #000;
  }

  #gtco-header,
  #gtco-counter,
  .gtco-bg {
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    position: relative;
  }
`;
