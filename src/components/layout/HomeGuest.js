import React, { Component } from "react";

import {
  Container,
  SignUpContainer,
  HomeMessageContainer,
  ImgContainer,
  Content,
} from "./HomeGuest.styles";

import Background from "../../images/homeguest3.jpg";
import HomeMessage from "./HomeMessage";
import SignUp from "../../pages/signup";

export class HomeGuest extends Component {
  render() {
    return (
      <Container>
        <ImgContainer>
          <img
            src={Background}
            alt="World Map"
            style={{ width: "100%", opacity: "30%" }}
          />
        </ImgContainer>
        <Content>
          <HomeMessageContainer>
            <HomeMessage />
          </HomeMessageContainer>
          <SignUpContainer>
            <SignUp />
          </SignUpContainer>
        </Content>
      </Container>
    );
  }
}

export default HomeGuest;
