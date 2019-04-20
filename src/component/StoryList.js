import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import ListItemText from '@material-ui/core/ListItemText';
import { func } from 'prop-types';

const mystorylist=[{
    id:1,
    text:"Eiusmod amet laborum dolor ullamco duis culpa in anim. Irure magna excepteur ullamco reprehenderit et. Excepteur duis ullamco qui officia aliqua nulla fugiat cupidatat. Amet esse esse exercitation elit culpa sit do aliqua esse. Ut id enim adipisicing eiusmod ex labore sunt excepteur.",
    title:"Tempor ut reprehenderit "
  },{
    id:2,
    text:"Cillum tempor minim id eiusmod irure veniam amet labore consequat est magna mollit proident dolor. Tempor sunt in labore sit labore cupidatat ea laboris aliquip quis. Eu irure et consectetur anim et exercitation nisi eiusmod est consequat esse eiusmod. Incididunt eu anim voluptate aliquip laborum eu veniam ipsum consequat.",
    title:"tempor minim "
  },{
    id:3,
    text:"Minim pariatur culpa minim aute minim occaecat excepteur ut do aute id duis. Quis consequat nostrud mollit duis minim pariatur labore sit duis enim nisi. Reprehenderit excepteur amet esse est dolore ea laborum nisi consectetur Lorem. Excepteur reprehenderit eiusmod id cillum aliquip eiusmod laboris elit aliqua.",
    title:"Minim pariatur"
  },{
    id:4,
    text:"Qui ad sint deserunt nulla officia eiusmod. Eiusmod voluptate non nulla duis deserunt esse cillum sunt. Ut ullamco mollit non anim voluptate deserunt.Voluptate culpa nostrud deserunt culpa do Lorem consequat et ad et in anim enim fugiat. Incididunt irure cillum laborum Lorem esse ex. Aliqua elit nulla id est cillum adipisicing velit ullamco esse aliquip quis nulla aute dolore. Velit ipsum duis labore ut officia exercitation non eu consectetur enim dolore.",
    title:"enim dolore"
  }];


function StoryCard(props){
    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

    return (
        props.storylist.map((obj)=>{ 
            function handleClick(){props.changeStory(obj);}

            return (
            <ListItemLink key={obj.id} onClick={handleClick}>
                     <ListItemText primary={obj.title} />
                     {/* <p>{obj.text}</p> */}
                </ListItemLink>
            )})

    )
}

const StoryList=(props)=>{
    
        const styles = theme => ({
            root: {
            width: '50%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
            },
        });
        
     
        return(
            <div>
                 <List component="nav" >
                        
                            <StoryCard changeStory ={props.onClickFun} storylist={mystorylist} />
                
                </List>
            </div>
        )
}

export default StoryList;