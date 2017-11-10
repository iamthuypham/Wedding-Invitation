import React from 'react';
import Typist from 'react-typist';
import Loader from './Loader';

import Timer from './Timer';
import Form from './Form';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = (theme) => ({
  LoverFont: {
    fontFamily: theme.custom.font.LoverFont,
  },
  BilboFont: {
    fontFamily: theme.custom.font.BilboFont,
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  col50: {
    width: '50%',
    padding: '5%'
  },
  '@media (max-width: 426px)': {
    row: {
      display: 'flex',
      flexDirection: 'column',
      padding: '5%'
    },
    col50: {
      width: '100%',
      padding: '0'
    },
  },
  alignCenter:{
    textAlign: 'center'
  },
  alignLeftMobile:{
    textAlign: 'center'
  },
  alignRightMobile:{
    textAlign: 'center'
  },
  '@media (min-width: 426px)': {
    alignLeftMobile:{
      textAlign: 'left'
    },
    alignRightMobile:{
      textAlign: 'right'
    }
  },
  AquaBtn: {
    backgroundColor: theme.palette.common.aqua
  },
  BlushBtn: {
    backgroundColor: theme.palette.common.blush
  },
  extraInfo: {
    padding: '5%'
  }
});

class Home extends React.Component { 
  constructor() {
    super();
    this.state={
      loading: true,
      openStory: false,
      openForm: false,
      story: '',
    }
    this.handleOpenStory = this.handleOpenStory.bind(this)
    this.handleOpenForm = this.handleOpenForm.bind(this)
  };
  componentWillMount(){
       this.setState({loading: true}); //optional 
    }

    componentDidMount(){
        setTimeout(() => this.setState({ loading: false }), 10000);
    }
  handleOpenStory(){
    this.setState({openStory: !this.state.openStory, openForm: false,
      story: "We are a cute couple. We met and have been through a lot."
    })
  }
  handleOpenForm(){
    this.setState({openStory: false, openForm: !this.state.openForm})
  }

  render() {
    const { classes } = this.props
    const { openStory, openForm, story } = this.state
    return (
      <div>
        {this.state.loading ? 
          (<Loader />
          ):(
          <div>
        <Typography type='headline' className={[classes.LoverFont, classes.alignCenter].join(' ')}>Save The Day</Typography>
        <Typography type='title' className={[classes.BilboFont, classes.alignCenter].join(' ')}>June 5th, 2018</Typography>
        <Timer />
        <div className={classes.row}>
          <div className={[classes.col50, classes.alignRightMobile].join(' ')}>
            <Typography type='body1' className={classes.LoverFont}>Ceremony 11am</Typography>
            <Typography type='body2' className={classes.BilboFont}>Vietnamese Martyrs Parish</Typography>
            <Typography type='body2' className={classes.BilboFont}>6841 S 180th St.</Typography>
            <Typography type='body2' className={classes.BilboFont}>Tukwila WA 98188</Typography>
            <Button raised className={classes.AquaBtn} onClick={this.handleOpenStory}>Our Story</Button>
          </div>
          <div className={[classes.col50, classes.alignLeftMobile].join(' ')}>
            <Typography type='body1' className={classes.LoverFont}>Reception 5pm</Typography>
            <Typography type='body2' className={classes.BilboFont}>Tulalip Resort Casino</Typography>
            <Typography type='body2' className={classes.BilboFont}>10200 Quil Ceda Blvd</Typography>
            <Typography type='body2' className={classes.BilboFont}>Tulalip WA 98271</Typography>
            <Button raised className={classes.BlushBtn} onClick={this.handleOpenForm}>Reserve</Button>
          </div>
        </div>
        {openStory?(
          <div className={[classes.extraInfo, classes.alignCenter].join(' ')}><Typography type='display1'><Typist>{story}</Typist></Typography></div>
        ):('')
        }
        {openForm?(
          <div className={classes.extraInfo}>
            <Form/>
          </div>
        ):('')
        }
        </div>
        )}
      </div>
    );
  }
};

export default withStyles(styles)(Home);