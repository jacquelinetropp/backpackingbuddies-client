import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {Link} from 'react-router-dom';

import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = (theme) => ({
  ...theme.spreadThis,
  link: {
    backgroundColor: "#7ab4cc",
    color: "black",
    padding: ".5rem",
    borderRadius: "3px",
    boxShadow: "0 0 2rem rgba(0,0,0,0.2)",
    "&:hover": {
      backgroundColor: "rgb(85, 125, 142)",
    },

    a: {
      color: "black",
      "&:visited": {
        color: "black"
      }
    },
  }
 
});

class LoggedOut2 extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
  onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData, this.props.history);
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const {
      classes,
      UI: { loading },
    } = this.props;
    const { errors } = this.state;
    return (
      <Fragment>
       
      <Link to ="/login" className={classes.link}>Login</Link>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  loginUser,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(LoggedOut2));
