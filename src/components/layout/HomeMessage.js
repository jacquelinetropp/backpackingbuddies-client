import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import Typography from "@material-ui/core/Typography";

const styles = {
  Hometext: {
    textAlign: "left",
  },
};
const HomeMessage = (props) => {
  const classes = props;
  return (
    <div className={classes.Hometext}>
      <Typography variant="h2">Welcome to Backpacking Buddies!</Typography>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
        dignissim ligula. In eleifend vehicula nisl. Praesent faucibus sed diam
        id dictum. Phasellus ornare nulla iaculis pretium varius. Sed vel nibh
        accumsan, dictum leo sed, eleifend ex. Sed lorem elit, lobortis at nisl
        sed, hendrerit feugiat lectus. Quisque fermentum dolor magna, nec
        aliquam mi cursus non. Maecenas neque odio, facilisis eget augue quis,
      </p>
    </div>
  );
};

export default withStyles(styles)(HomeMessage);
