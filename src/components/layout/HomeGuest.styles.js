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

  @media (max-width: 700px) {
    padding: 0 25px;   
  }

  @media (max-width: 425px) {
    text-align: center;
  }
`;

export const SignUpContainer = styled.div`
  padding: 0 50px;
  width: 50%;

  @media (max-width: 700px) {
    padding: 0 25px;   
  }

  @media (max-width: 320px) {
    width: 75%;
   
  }
`;

export const ImgContainer = styled.div`
  width: 100%;

  @media (max-width: 700px) {
    width: auto;
    height: 100%;
  }
 
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  padding-top: 3rem;

  @media (max-width: 1024px) {
    padding-top: 5rem;
  }

  @media (max-width: 768px) {
    padding-top: 8rem;
  }

  @media (max-width: 425px) {
    margin-top: 10rem;
   flex-direction: column;
   align-items: center;
   background-color: #E4E3E2;
  }

  @media (max-width: 320px) {
    margin-top: 12rem;
   
  }


  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
