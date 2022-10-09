import styled from "styled-components";

export const AsideContainer = styled.aside`
  border: 1px solid black;
  position: relative;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const PinkContainer = styled.div`
  position: absolute;
  top: 60%;
  right: 45rem;

  @media screen and (max-width: 1024px) {
    right: 30rem;
  }
`;

export const OrangeContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 55%;
  right: 55rem;

  @media screen and (max-width: 1024px) {
    right: 41rem;
  }
`;
