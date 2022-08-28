import React, { Component, Fragment } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import HomeIcon from "@material-ui/icons/Home";
import Typography from "@material-ui/core/Typography";
import Airplane from "@material-ui/icons/AirplanemodeActive";

import Post from "../components/post/Post";
import Profile from "../components/profile/Profile";
import PostSkeleton from "../util/PostSkeleton";
import HomeGuest from "../components/layout/HomeGuest";

import { connect } from "react-redux";
import { getFollowingPosts } from "../redux/actions/dataActions";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  ...theme.spreadThis,
});

export class Home extends Component {
  componentDidMount() {
    this.props.getFollowingPosts();
  }
  render() {
    const { posts, loading } = this.props.data;
    const { authenticated, classes } = this.props;
    
    const sortedPosts = posts.sort((a,b) => b.createdAt > a.createdAt ? 1: -1);

    let recentPostsMarkup = loading ? (
      <PostSkeleton />
    ) : posts.length === 0 ? (
      <Fragment>
        <Typography variant="h6">
          No users are being followed. Go to the explore page and find some
          people to follow!
        </Typography>
      </Fragment>
    ) : (
      sortedPosts.map((post) => <Post key={post.postId} post={post} />)
    );

    return (
      <Fragment>
        {authenticated ? (
          <div className="page">
            <Grid container spacing={5}>
              <Grid item sm={4} xs={12}>
                <Paper className={classes.paper}>
                  <Link to="/home" className={classes.link}>
                    <HomeIcon /> <Typography variant="h4">Home</Typography>
                  </Link>
                  <hr className={classes.hr} />
                  <Link to="/explore" className={classes.link}>
                    <Airplane /> <Typography variant="h4">Explore</Typography>
                  </Link>
                  <hr className={classes.hr} />
                  <Profile />
                </Paper>
              </Grid>
              <Grid item sm={8} xs={12}>
                {recentPostsMarkup}
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

const mapStateToProps = (state) => ({
  data: state.data,
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps, { getFollowingPosts })(
  withStyles(styles)(Home)
);
