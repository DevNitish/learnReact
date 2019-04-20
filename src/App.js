import React, { Component } from 'react';
import NavBar from './component/NavBar'
import StoryList from './component/StoryList'
import Grid from '@material-ui/core/Grid';
import Story from './component/Stroy'
import './App.css';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
         text:"Select a story...",
         title:"",
         changeStory:(sq)=>{
          // sq={text:"honka",
          // title:"title honka"}
          this.setState({
            text:sq.text
          })
          this.setState({
            title:sq.title
          })
        }
    }
 }

  render() {
    return (
      <div >
        <NavBar/>
        <p>{this.state.title}</p>
        <p>{this.state.text}</p>
        <button onClick={this.state.changeStory}>Change me</button>
        <Grid container >
          <Grid item xs={8}>
            <Story storytext={this.state.text} storytitle={this.state.title} />
          </Grid>
          <Grid item xs={4}>
            <StoryList  onClickFun={this.state.changeStory} />
          </Grid>
        </Grid>
        
        {/* <StoryList/> */}
      </div>
    );
  }
}

export default App;
