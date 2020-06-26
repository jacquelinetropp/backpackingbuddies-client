import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import Post from "../components/post/Post";
import Profile from "../components/profile/Profile";
import PostSkeleton from "../util/PostSkeleton";
import HomeGuest from "../components/layout/HomeGuest";

import { connect } from "react-redux";
import { getPosts } from "../redux/actions/dataActions";

export class Home extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { posts, loading } = this.props.data;
    const { authenticated } = this.props;

    let recentPostsMarkup = !loading ? (
      posts.map((post) => <Post key={post.postId} post={post} />)
    ) : (
      <PostSkeleton />
    );

    return (
      <Fragment>
        {authenticated ? (
          <div className="page">
            <Grid container spacing={5}>
              <Grid item sm={8} xs={12}>
                {recentPostsMarkup}
              </Grid>
              <Grid item sm={4} xs={12}>
                <Profile />
              </Grid>
            </Grid>
          </div>
        ) : (
          <HomeGuest />
        )}
      </Fragment>
    );
  }
}

Home.propTypes = {
  getPosts: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps, { getPosts })(Home);
