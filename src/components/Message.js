import React from 'react';
import PropTypes from 'prop-types';

import {withStyles} from 'material-ui/styles';

import Typography from 'material-ui/Typography';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
  BilboFont: {
    fontFamily: theme.custom.font.BilboFont,
    color: 'white'
    
  },
});

const Message = ({classes, handleMessageClose, message, open}) => (
  <Snackbar
    anchorOrigin={{ vertical:'top', horizontal:'center' }}
    open={open}
    autoHideDuration={6000}
    onRequestClose={handleMessageClose}
    SnackbarContentProps={{
      'aria-describedby': 'message-id',
    }}
    message={<Typography id="message-id" type='display1' className={classes.BilboFont}>{message}</Typography>}
    action={[
      <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        className={classes.close}
        onClick={handleMessageClose}>
        <Typography type='display1' className={classes.BilboFont}>
        X
        </Typography>
      </IconButton>,
    ]}
  />
);

Message.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMessageClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Message);
