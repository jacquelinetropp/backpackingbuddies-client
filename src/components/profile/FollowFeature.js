import React, { Component, Fragment } from "react";
import MyButton from "../../util/MyButton";

import { connect } from "react-redux";
import { followUser, unfollowUser } from "../../redux/actions/userActions";

import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { withRouter } from "react-router-dom";

class FollowFeature extends Component {
  followingUser = () => {
    if (
      this.props.user.following &&
      this.props.user.following.find(
        (follow) => follow.following === this.props.handle
      )
    )
      return true;
    else return false;
  };
  followUser = () => {
    this.props.followUser(this.props.handle);
  };
  unfollowUser = () => {
    this.props.unfollowUser(this.props.handle);
  };
  render() {
    const { authenticated } = this.props;
    const followerMarkup = this.followingUser ? (
      <MyButton tip="Unfollow" onClick={this.unfollowUser}>
        <AddBoxOutlinedIcon color="primary" />
        <spam>Unfollow</spam>
      </MyButton>
    ) : (
      <MyButton tip="Follow" onClick={this.followUser}>
        <AddBoxIcon color="primary" />
        <span>Follow</span>
      </MyButton>
    );
    return (
      <Fragment>
        {authenticated ? (
          <MyButton tip="Follow" onClick={this.followUser}>
            <AddBoxIcon color="primary" />
            <span>Follow</span>
          </MyButton>
        ) : null}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

const mapActionsToProps = {
  followUser,
  unfollowUser,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(FollowFeature));
