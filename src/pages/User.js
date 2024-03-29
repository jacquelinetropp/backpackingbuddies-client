import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Post from "../components/post/Post";
import StaticProfile from "../components/profile/StaticProfile";
import Grid from "@material-ui/core/Grid";
import PostSkeleton from "../util/PostSkeleton";
import ProfileSkeleton from "../util/ProfileSkeleton";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
import { getUserData } from "../redux/actions/dataActions";

class User extends Component {
  state = {
    profile: null,
    postIdParam: null,
  };
  componentDidMount() {
    const handle = this.props.match.params.handle;
    const postId = this.props.match.params.postId;

    if (postId) this.setState({ postIdParam: postId });
    this.props.getUserData(handle);
    axios
      .get(`/user/${handle}`)
      .then((res) => {
        this.setState({
          profile: res.data.user,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { posts, loading } = this.props.data;
    const { postIdParam } = this.state;

    const sortedPosts = posts.sort((a,b) => b.createdAt > a.createdAt ? 1: -1);

    const postsMarkup = loading ? (
      <PostSkeleton />
    ) : posts.length === 0 ? (
      <Typography variant="h6">
        No posts from this user. Check back later!
      </Typography>
    ) : !postIdParam ? (
      sortedPosts.map((post) => <Post key={post.postId} post={post} />)
    ) : (
      sortedPosts.map((post) => {
        if (post.postId !== postIdParam)
          return <Post key={post.postId} post={post} />;
        else return <Post key={post.postId} post={post} openDialog />;
      })
    );

    return (
      <div className="page">
        <Grid container spacing={5}>
        <Grid item sm={4} xs={12}>
            {this.state.profile === null ? (
              <ProfileSkeleton />
            ) : (
              <StaticProfile profile={this.state.profile} />
            )}
          </Grid>
          <Grid item sm={8} xs={12}>
            {postsMarkup}
          </Grid>
          
        </Grid>
      </div>
    );
  }
}

User.propTypes = {
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getUserData })(User);
