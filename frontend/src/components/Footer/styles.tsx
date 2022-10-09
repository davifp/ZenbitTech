import styled from "styled-components";

export const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border: 1px solid #d8d8d8;

  div {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 425px) {
    div:nth-child(2),
    div:nth-child(3) {
      display: none;
    }
  }
`;
