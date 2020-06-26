import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { createUserDetails, getUserData } from "../redux/actions/userActions";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MyButton from "../util/MyButton";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  ...theme.spreadThis,
  button: {
    float: "right",
  },
});

class CreateDetails extends Component {
  state = {
    bio: "",
    website: "",
    location: "",
  };

  mapUserDetailsToState = (credentials) => {
    this.setState({
      bio: credentials.bio ? credentials.bio : "",
      website: credentials.website ? credentials.website : "",
      location: credentials.location ? credentials.location : "",
    });
  };

  componentDidMount() {
    const { credentials } = this.props;
    this.mapUserDetailsToState(credentials);
    console.log(credentials);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    const userDetails = {
      bio: this.state.bio,
      website: this.state.website,
      location: this.state.location,
    };
    this.props.createUserDetails(userDetails);
    this.props.history.push("/");
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="page">
        <Typography variant="h3">Create your profile details</Typography>
        <form>
          <TextField
            name="bio"
            type="text"
            label="Bio"
            multiline
            rows="3"
            placeholder="A short bio about yourself"
            className={classes.TextField}
            value={this.state.bio}
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            name="website"
            type="text"
            label="Website"
            placeholder="Your personal/professional website"
            className={classes.TextField}
            value={this.state.website}
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            name="location"
            type="text"
            label="Location"
            placeholder="Current location"
            className={classes.TextField}
            value={this.state.location}
            onChange={this.handleChange}
            fullWidth
          />
          <Button onClick={this.handleSubmit} color="primary">
            Save
          </Button>
        </form>
      </div>
    );
  }
}

CreateDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  credentials: state.user.credentials,
});

export default connect(mapStateToProps, { createUserDetails, getUserData })(
  withStyles(styles)(withRouter(CreateDetails))
);
