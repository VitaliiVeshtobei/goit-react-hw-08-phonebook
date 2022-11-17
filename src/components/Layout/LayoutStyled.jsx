import styled from 'styled-components';
import img from '../../image/pexels-alex-andrews-821754.jpg';

export const LayoutContainer = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.5970982142857143) 20%,
      rgba(73, 90, 106, 0.6027004551820728) 80%
    ),
    url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;

  /* width: auto;
  max-width: 1600px; */
  /* height: 600px; */
  /* min-height: calc(100vh - 1px); */

  /* min-height: calc(100vh); */
`;
