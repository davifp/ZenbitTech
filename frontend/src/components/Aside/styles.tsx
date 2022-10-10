import styled from "styled-components";

export const AsideContainer = styled.aside`
  position: relative;
  width: 65rem;

  @media screen and (max-width: 1024px) {
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
`;

export const OrangeContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 55%;
  right: 55rem;
`;
