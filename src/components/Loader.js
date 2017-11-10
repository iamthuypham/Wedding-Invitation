import React from 'react';
import Anime from 'react-anime';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '20%'
  },
  LoverFont: {
    fontFamily: theme.custom.font.LoverFont,
  },
});

class Timer extends React.Component { 
  constructor() {
    super();
  };
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Anime
            duration={(el, i, l) => 1000 + (i * 1000)}
            elasticity={(el, i, l) => 300 + (i * 1000)}
            direction='alternate'
            opacity={[0.1, 1]}
            scale={[0.7, 1.2]}
            loop={true}>
          <div><Typography type='headline' className={classes.LoverFont}>Louis & Thuy</Typography></div>
        </Anime>
      </div>
    );
  }
};

export default withStyles(styles)(Timer);