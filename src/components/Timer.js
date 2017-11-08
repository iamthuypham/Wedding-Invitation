import React from 'react';
import Countdown from 'react-countdown-now';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = (theme) => ({
  BilboFont: {
    fontFamily: theme.custom.font.BilboFont,
    textAlign: 'center'
  }
});

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ days, hours, minutes, seconds, completed, classes }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return <Typography type='subheading' className={classes.BilboFont}>
        {days} days {hours} hours {minutes} min {seconds} sec
      </Typography>;
  }
};

class Timer extends React.Component { 
  constructor() {
    super();
  };
  render() {
    const { classes } = this.props
    return (
      <Countdown 
        date={Date.parse("June 5, 2018, 17:00:00")}
        renderer={renderer}
        classes={classes}
      />
    );
  }
};

export default withStyles(styles)(Timer);