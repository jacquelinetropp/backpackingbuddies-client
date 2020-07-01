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
import { getPosts } from "../redux/actions/dataActions";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  ...theme.spreadThis,
});

export class Explore extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { posts, loading } = this.props.data;
    const { authenticated, classes } = this.props;

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

export default connect(mapStateToProps, { getPosts })(
  withStyles(styles)(Explore)
);
