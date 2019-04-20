import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Divider } from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function Story(props) {

  return (
    <div>
      <Paper elevation={1}>
        <Typography variant="h5" component="h3">
          {props.title}
        </Typography>
        {/* <Divider/> */}
        <Typography component="p">
          {props.text}
        </Typography>
      </Paper>
    </div>
  );
}


// export default withStyles(styles)(PaperSheet);

export default Story;
