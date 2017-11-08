import React from 'react';
// import fetch from 'node-fetch';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Message from './Message';

const styles = (theme) => ({
  LoverFont: {
    fontFamily: theme.custom.font.LoverFont,
  },
  BilboFont: {
    fontFamily: theme.custom.font.BilboFont,
    textAlign: 'center'
  },
  alignCenter:{
    textAlign: 'center'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  BlushBtn: {
    backgroundColor: theme.palette.common.blush
  },
});

class Form extends React.Component {
   constructor() {
    super();
    this.state = {
      name: '',
      count: '',
      note:'',
      message: '',
      messageOpen: false,
      error:'',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleMessageClose = this.handleMessageClose.bind(this);
    this.handleMessageNew = this.handleMessageNew.bind(this);
  };

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  
  handleMessageNew(message) {
    this.setState({message, messageOpen: true});
  };

  handleMessageClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({messageOpen: false});
  };
  
  handleSubmit(e) {
    e.preventDefault();
    const {name,count,note} = this.state
    fetch('https://hooks.zapier.com/hooks/catch/2690251/sbp862/', 
    {
      method: 'POST',
      headers: {
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        count: count,
        note: note
      })
    })
    .then(response => {
      if (response.status === 200) {
        this.setState({name: '', count: '', note:'', status:'responsing'})
        this.handleMessageNew("You are in our list :)")
      } else {
        this.setState({status: 'something else'})
      }
    }).catch(error => {
      this.setState({error, status: 'error'})
      this.handleMessageNew("Something went wrong! Please email Thuy & Lou at tpham045@hotmail.com")
    })
  };

  render() {
    const { classes } = this.props;
    const { name, count, note, message, messageOpen, status } = this.state;
    return (
      <div className={classes.alignCenter}>
        <form  noValidate autoComplete="off">
          <Typography type='body1' className={classes.LoverFont}>Guest Information</Typography>
          <TextField
            label="Your name"
            name="name"
            className={classes.textField}
            value={name}
            onChange={this.handleChange}
            margin="normal"
            required
          />
          <TextField
            label="Number of guests"
            name="count"
            type="number"
            className={classes.textField}
            value={count}
            onChange={this.handleChange}
            margin="normal"
            required
          />
          <TextField
            name="note"
            label="Note"
            className={classes.textField}
            value={note}
            onChange={this.handleChange}
            margin="normal"
          />
          <Button raised className={classes.BlushBtn} onClick={this.handleSubmit}>Send</Button>
        </form>
        <Typography type='body1' className={classes.LoverFont}>Dinner Choices</Typography>
        <div>
          <Typography type='display2' className={classes.BilboFont}>Paremesan Encrusted Chicken</Typography>
          <Typography type='display2' className={classes.BilboFont}>Smoked Lemon Salmon</Typography>
          <Typography type='display2' className={classes.BilboFont}>Sirloin Steak</Typography>
        </div>
        <Typography type='body1' className={classes.LoverFont} style={{marginTop:'30px'}}>Stay With Us?</Typography>
        <Typography type='display2' className={classes.BilboFont}>We’ve reserved a block of rooms at the resort at a rate of $XXX per night. You can reserve one of these rooms by calling 212-555-1234 or visiting www.hotelsite.com. Please reference or enter the code 414Wed when booking. In order to secure the discounted rate, please book by April 1, 2015.</Typography>
        <Message
          handleMessageClose={this.handleMessageClose}
          message={message}
          open={messageOpen}
        />
      </div>
    )
  }
}

export default withStyles(styles)(Form);