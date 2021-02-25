import React, { Component } from "react";
import AppIcon from "../../images/icon2.png";
import { Link } from "react-router-dom";

import withStyles from "@material-ui/core/styles/withStyles";
import LoggedOut2 from "../navbar/LoggedOut2";
import LoggedIn from "../navbar/LoggedIn";

import { connect } from "react-redux";

//MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  navbar: {
    backgroundColor: "#c4baa7",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    '@media (max-width:425px)': {
      padding: "0 3px",
    },
    '@media (max-width:320px)': {
      padding: "0 5px",
    }
  },
  title: {
    '@media (max-width:425px)': {
      alignItems: "center",
    }
  },
  authTitle: {
    '@media (max-width:450px)': {
      display: 'none'
    }
  },
  imageIcon: {
    maxHeight: 25,
    alignSelf: 'center',

    '@media (max-width:320px)': {
      maxHeight: 30,
    }
  },
  Brand: {
    display: "flex",
    color: "#524A21",

    "& visited": {
      color: "#524A21",
    },
  },
};

class Navbar extends Component {
  render() {
    const { authenticated, classes } = this.props;
    return (
      <AppBar className={classes.navbar}>
        <Toolbar className="nav-container">
          <Link to="/" className={classes.Brand}>
            <img
              src={AppIcon}
              alt="logo - backpack"
              className={classes.imageIcon}
            />
            {authenticated ? 
            (<Typography variant="h5" className={classes.authTitle}>
              Backpacking Buddies
            </Typography>) :
            (<Typography variant="h5" className={classes.title}>
              Backpacking Buddies
            </Typography>)}
           
          </Link>
          {authenticated ? <LoggedIn /> : <LoggedOut2 />}
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(withStyles(styles)(Navbar));
