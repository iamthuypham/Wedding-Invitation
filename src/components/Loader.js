import React from 'react';
import Anime from 'react-anime';
import Typist from 'react-typist';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    textAlign: 'center'
  },
  opening: {
    width: '90%'
  },
  signature: {
    marginTop: '25%'
  },
  LoverFont: {
    fontFamily: theme.custom.font.LoverFont,
  },
});

class Timer extends React.Component { 
  constructor() {
    super();
    this.state={
      opening: true,
    }
  }
  componentDidMount(){
    setTimeout(()=>this.setState({opening: false}), 20000);
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        {this.state.opening ? (
        <div className={[classes.opening, classes.alignCenter].join(' ')}>
          <Anime
            duration={(el, i, l) => 9000 + (i * 1000)}
            elasticity={(el, i, l) => 600 + (i * 800)}
            direction='alternate'
            opacity={[0, 1]}
            translateY='1.2em'
            >
            <div>
              <Typography type='display1' className={classes.LoverFont}>
              <Typist>
                <span>Dear  Family &  Friends,</span>
                <br />
                <Typist.Delay ms={2200} />
                <br />
                <span>We are more than happy to invite you to our wedding.</span>
                <Typist.Delay ms={2700} />
                <br />
                <span>We cannot wait to see you there and celebrate the moment with us.</span>
              </Typist>
              </Typography>
            </div>
          </Anime>
        </div>
        ):(
        <Anime
            delay={(el, index) => index * 240}
            duration={(el, i, l) => 3000 + (i * 1000)}
            elasticity={(el, i, l) => 600 + (i * 1000)}
            direction='alternate'
            opacity={[0, 1]}
            scale={[0.3, 1.2]}>
          <div className={classes.signature}>
            <Typography type='display1' className={classes.LoverFont}>With Love,</Typography>
            <Typography type='title' className={classes.LoverFont}>Louis & Thuy</Typography>
          </div>
        </Anime>
        )}
      </div>
    );
  }
};

export default withStyles(styles)(Timer);