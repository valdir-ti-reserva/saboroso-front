import styled from 'styled-components';
import img from '../../../images/loader.gif';

export const Load = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: url(${img}) center no-repeat #fff;
`;
