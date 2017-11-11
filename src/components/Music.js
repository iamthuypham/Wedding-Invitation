import React from 'react';
import Sound from 'react-sound';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

class Music extends React.Component { 
  constructor() {
    super();
    this.state={
      position: 0,
      loading: true,
      openStory: false,
      openForm: false,
      story: '',
    }
    this.handlePlaying = this.handlePlaying.bind(this)
    this.handleFinishedPlaying = this.handleFinishedPlaying.bind(this)
  };
    
  handlePlaying(ev) {
    this.setState({ position: ev.position })
  }

  handleFinishedPlaying() {
    this.setState({ position: 0 });
  }
  render() {
    return (
      <Sound
          url="searching_for_you.mp3"
          playStatus={Sound.status.PLAYING}
          position={this.state.position}
          onPlaying={this.handlePlaying}
          onFinishedPlaying={this.handleFinishedPlaying}
        />
    );
  }
};

export default Music;