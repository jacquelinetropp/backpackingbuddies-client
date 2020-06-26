import styled, { css } from "styled-components";

const loginStyles = css`
  background-color: #7ab4cc;

  a {
    color: black;
  }
`;

const buttonStyles = css`
  background-color: #7ab4cc;
  font-size: 1.3rem;
  width: 150px;
`;

const invertedButtonStyles = css``;

const getButtonStyles = (props) => {
  if (props.loginStyles) {
    return loginStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  width: auto;
  padding: 5px 10px;
  text-transform: uppercase;
  cursor: pointer;

  border-radius: 5px;

  ${getButtonStyles}
`;
