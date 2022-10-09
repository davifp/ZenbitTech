import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainContainer = styled.div`
  display: flex;
  background-image: url("cloud.svg");
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
