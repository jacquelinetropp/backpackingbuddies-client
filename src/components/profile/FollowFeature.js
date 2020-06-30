import React, { Component, Fragment } from "react";
import MyButton from "../../util/MyButton";

import { connect } from "react-redux";
import { followUser, unfollowUser } from "../../redux/actions/userActions";

import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import Typography from "@material-ui/core/Typography";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { withRouter } from "react-router-dom";

class FollowFeature extends Component {
  followingUser = () => {
    if (
      this.props.user.following &&
      this.props.user.following.find(
        (user) => user.following === this.props.handle
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
    const { authenticated } = this.props.user;
    const { followerCount } = this.props;
    return (
      <Fragment>
        {followerCount}{" "}
        {followerCount.length === 1 ? (
          <span>Follower</span>
        ) : (
          <span>Followers</span>
        )}
        <br />
        {!authenticated ? null : this.followingUser() ? (
          <MyButton tip="Unfollow" onClick={this.unfollowUser}>
            <AddBoxOutlinedIcon color="primary" />
            <Typography variant="body1">Unfollow</Typography>
          </MyButton>
        ) : (
          <MyButton tip="Follow" onClick={this.followUser}>
            <AddBoxIcon color="primary" />
            <Typography variant="body1">Follow</Typography>
          </MyButton>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {
  followUser,
  unfollowUser,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(FollowFeature));
