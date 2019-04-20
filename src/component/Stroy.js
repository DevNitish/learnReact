import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Divider } from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function Story(props) {
console.log("props ===111",props);
  return (
    <div>
      <Paper elevation={1}>
        <Typography variant="h5" component="h3">
          {props.storytitle}
          ll
        </Typography>
        {/* <Divider/> */}
        <Typography component="p">
          {props.storytext}
          =========<br/>
          Duis elit enim proident irure eiusmod esse. Occaecat amet ipsum in et consequat voluptate. Cupidatat deserunt in cupidatat excepteur id enim amet. Deserunt sit proident nulla Lorem ad aute qui anim occaecat officia laboris voluptate. Ipsum incididunt commodo pariatur ad tempor non aliqua anim. Aute Lorem anim sint cillum ex sint voluptate excepteur pariatur pariatur duis.
        </Typography>
      </Paper>
    </div>
  );
}


// export default withStyles(styles)(PaperSheet);

export default Story;
