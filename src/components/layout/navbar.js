import React, { Component } from "react";
import AppIcon from "../../images/icon2.png";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";
import LoggedOut from "../navbar/LoggedOut";
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
  },
  imageIcon: {
    maxHeight: 25,
  },
  Brand: {
    display: "flex",

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
            <Typography variant="h5" className={classes.title}>
              Backpacking Buddies
            </Typography>
          </Link>
          {authenticated ? <LoggedIn /> : <LoggedOut />}
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(withStyles(styles)(Navbar));
