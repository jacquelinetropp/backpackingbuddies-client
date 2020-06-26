import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  width: 100%;
  height: 100%;
  position: relative;
`;

export const HomeMessageContainer = styled.div`
  padding: 0 50px;
  width: 50%;
  align-self: center;
`;

export const SignUpContainer = styled.div`
  padding: 0 50px;
  width: 50%;
`;

export const ImgContainer = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;

  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
