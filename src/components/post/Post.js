import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import MyButton from "../../util/MyButton";
import DeletePost from "./DeletePost";
import PostDialog from "./PostDialog";
import LikeButton from "./LikeButton";

///Mui Stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

//Icons
import ChatIcon from "@material-ui/icons/Chat";
import LocationOn from "@material-ui/icons/LocationOn";

import { connect } from "react-redux";

const styles = {
  card: {
    display: "flex",
    marginBottom: 20,
    position: "relative",
  },
  image: {
    minWidth: 200,
    objectFit: "cover",
  },
  content: {
    padding: 25,
  },
  userDate: {
    display: "flex",
    alignItems: "baseline",
  },
  date: {
    paddingLeft: 10,
  },
  titleDiv: {
    display: "flex",
  },
  locationDiv: {},
};

export class Post extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      post: {
        body,
        createdAt,
        userImage,
        userHandle,
        postId,
        likeCount,
        commentCount,
        location,
        title,
      },
      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props;

    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeletePost postId={postId} />
      ) : null;

    return (
      <div>
        <Card className={classes.card}>
          <CardMedia
            image={userImage}
            title="Profile image"
            className={classes.image}
          />
          <CardContent className={classes.content}>
            <Typography variant="h4">{title}</Typography>

            <div className={classes.userDate}>
              <Typography
                variant="h6"
                component={Link}
                to={`/user/${userHandle}`}
                color="primary"
              >
                {userHandle}
              </Typography>
              {deleteButton}
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.date}
              >
                {dayjs(createdAt).fromNow()}
              </Typography>
            </div>

            <Typography variant="body1">{body}</Typography>
            {location ? (
              <div className={classes.locationDiv}>
                <Typography
                  variant="body2"
                  className={classes.location}
                  color="textSecondary"
                >
                  <LocationOn />
                  {location}
                </Typography>
              </div>
            ) : null}
            <LikeButton postId={postId} />
            <span>{likeCount} Likes</span>
            <MyButton tip="comments">
              <ChatIcon color="primary" />
            </MyButton>
            <span>{commentCount} Comments</span>
            <PostDialog
              postId={postId}
              userHandle={userHandle}
              openDialog={this.props.openDialog}
            />
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(Post));
