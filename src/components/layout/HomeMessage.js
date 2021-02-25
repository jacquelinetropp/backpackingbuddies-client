import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import Typography from "@material-ui/core/Typography";

const styles = {
  Hometext: {
    textAlign: "left",
    '@media (max-width:425px)': {
      textAlign: 'center',
    }

  },
  text: {
    '@media (max-width:425px)': {
      display: 'none'
    }
  }
};
const HomeMessage = (props) => {
  const {classes} = props;
  return (
    <div className={classes.Hometext}>
      <Typography variant="h2">Welcome to Backpacking Buddies!</Typography>
      <p className={classes.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
        dignissim ligula. In eleifend vehicula nisl. Praesent faucibus sed diam
        id dictum. Phasellus ornare nulla iaculis pretium varius. Sed vel nibh
        accumsan, dictum leo sed, eleifend ex. Sed lorem elit, lobortis at nisl
        sed, hendrerit feugiat lectus. 
      </p>
    </div>
  );
};

export default withStyles(styles)(HomeMessage);
