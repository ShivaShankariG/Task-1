import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TabsExampleIconText from './TabsExampleIconText';
import TextFieldExampleSimple from './TextFieldExampleSimple';
import AvatarExampleSimple from './AvatarExampleSimple';
import RaisedButton1 from './RaisedButton1';
import Avatar from 'react-avatar';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextArea from './TextArea';

import {lightBlue500 ,grey700 ,yellowA700,white, cyan500, brown900, blue500 } from 'material-ui/styles/colors';

const styles=
{
  styles:{
    backgroundColor: 'white',
     position: 'fixed',
    
     width: '100%',
      
  }
}
export default class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }


  render() {
    if(this.props.Id=='1')
    {
    return (
      <div>
      <Toolbar  style={styles.styles} >
        <ToolbarGroup firstChild={true} >
          <TabsExampleIconText context="main"/>
        </ToolbarGroup>
        <br/>
        <ToolbarGroup>
            <Avatar  size="40" src="http://www.agnc.org.uk/media/1027568/twitterbird.png" round= "true" style={{position: 'fixed', left: 850,}} />
        </ToolbarGroup>

        <ToolbarGroup style={{position: 'fixed', right: 300,}}>
          <TextFieldExampleSimple hinttext="search"  />
        </ToolbarGroup>
        <ToolbarGroup style={{position: 'fixed',top:5, right: 240,}}>
              <Avatar  size="40" src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=1280" round="true"/>
        </ToolbarGroup>
        <ToolbarGroup style={{position: 'fixed', right: 130, top: 10}}>
          <RaisedButton1 text="Tweet"/>
        </ToolbarGroup>

      </Toolbar>
      <br/>
      </div>
    );
  }
  else if(this.props.Id=='2')
  {
    return (
      <Toolbar >
        <ToolbarGroup firstChild={true}>
          <Avatar  size="40" src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=1280" round= "true" />
        </ToolbarGroup>
        <br/>

        <ToolbarGroup>
        <TextArea/>
        </ToolbarGroup>


      </Toolbar>
    );
  }
  else if(this.props.Id=='search')
  {
    return(
      <Toolbar>
      <ToolbarGroup firstChild={true} >
        <TabsExampleIconText context="second"/>
      </ToolbarGroup>
      </Toolbar>
    );
  }
  }
}
