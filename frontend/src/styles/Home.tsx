import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url("cloud.svg");

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 5rem;
  left: 5rem;

  @media screen and (max-width: 1024px) {
    top: 0;
    left: 0;
  }

  @media screen and (max-width: 425px) {
    display: none;
  }
`;
