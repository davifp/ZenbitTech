import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
import { Field } from "formik";

export const Container = styled.div`
  max-width: 55rem;
  height: 80rem;
  margin: 17rem 5rem 0 15rem;

  @media screen and (max-width: 1024px) {
    max-width: 40rem;
    margin: 5rem;
  }

  @media screen and (max-width: 768px) {
    margin: 10rem;
    max-width: 55rem;
  }

  @media screen and (max-width: 425px) {
    margin: 2rem;
  }
`;

export const Label = styled.label`
  display: inline-block;
  padding: 1rem 0;
  font-size: 4rem;
  margin-bottom: 2.2rem;
`;

export const Input = styled(Field)`
  font-size: 1.8rem;
  padding: 3rem 4.5rem;
  border: 1px solid #dcdcdc;
  border-radius: 1rem;
  width: 100%;
  margin-top: 0.8rem;

  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid #a8b86b;

      &:focus,
      &:active {
        border: 1px solid ${darken(0.1, "#a8b86b")};
        box-shadow: #a8b86b 0px 0px 2px 1px;
        outline: none;
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid #BF310C;
      outline: none;

      &:focus,
      &:active {
        box-shadow: #BF310C 0px 0px 2px 1px,
        border: 1px solid #BF310C;
        outline: none;
      }
    `}

    ${({ component }) =>
    component &&
    css`
      height: 20rem;
    `}
`;

export const StyledErrorMessage = styled.p`
  padding: 0.5rem 0.75rem;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  color: #ff010c;
`;

export const Button = styled.button`
  font-size: 1.8rem;
  color: #ffffff;
  padding: 2.5rem 5rem;
  margin-top: 1.5rem;
  border: 1px solid ${darken(0.2, "#fad34f")};
  border-radius: 50rem;
  background-color: #fad34f;
  text-align: center;

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
    background-color: ${darken(0.1, "#fad34f")};
  }

  &:disabled {
    cursor: pointer;
    background-color: ${lighten(0.1, "#fad34f")};
    box-shadow: none;
    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Success = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 55rem;
  height: 60rem;
  color: green;
  font-size: 5rem;
`;
