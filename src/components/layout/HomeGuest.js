import React, { Component } from "react";

import {
  Container,
  SignUpContainer,
  HomeMessageContainer,
  ImgContainer,
  Content,
} from "./HomeGuest.styles";


import withStyles from "@material-ui/core/styles/withStyles";

import Background from "../../images/homeguest3.jpg";
import HomeMessage from "./HomeMessage";
import SignUp from "../../pages/signup";

const styles = {
  img: {
    width: "100%",
    opacity: "30%",
    '@media (max-width:700px)': {
      marginTop: "-20px",
      height: "520px",
 
    }
  }
}

export class HomeGuest extends Component {
  render() {
    const {classes} = this.props
    return (
      <Container>
        <ImgContainer>
          <img
            src={Background}
            alt="World Map"
            className={classes.img}
           
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

export default withStyles(styles)(HomeGuest);
