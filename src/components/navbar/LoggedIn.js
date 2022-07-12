import React, { Component } from "react";
import MyButton from "../../util/MyButton";
import { Link } from "react-router-dom";
import CreatePost from "../post/CreatePost";
import Notifications from "../layout/Notifications";
import withStyles from "@material-ui/core/styles/withStyles";

import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/userActions";

import HomeIcon from "@material-ui/icons/Home";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const styles = {
  navigation: {
    display: "flex",
  },
  button: {
    backgroundColor: "#7AB3CC",
  },
};

export class LoggedIn extends Component {
  handleLogout = () => {
    this.props.logoutUser();
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.navigation}>
        <CreatePost />
        <Link to="/">
          <MyButton tip="Home">
            <HomeIcon />
          </MyButton>
        </Link>
        <Notifications />
  
        <Button className={classes.button} onClick={this.handleLogout}>
          Logout
        </Button>
      </div>
    );
  }
}

export default connect(null, { logoutUser })(withStyles(styles)(LoggedIn));
