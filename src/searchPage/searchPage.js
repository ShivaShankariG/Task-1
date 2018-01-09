import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TabsExampleIconText from './TabsExampleIconText';
import {lightBlue500 ,grey700 ,yellowA700,white, cyan500, brown900  } from 'material-ui/styles/colors';

import Papers from './Papers';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import ExampleComponent from './ExampleComponent';
import IconButtonExampleSize from './IconButtonExampleSize';
import AppBarExampleIcon from './AppBarExampleIcon';
//import felxLayout from './flexLayout';
import Flex from './Flex'
import ScrollArea from 'react-scrollbar';

const muiTheme = getMuiTheme({
 //backgroundColor: '#E0E0E0',
  tabs: {
    backgroundColor: white,
     textColor: grey700,
     selectedTextColor: lightBlue500,
  },


});

const styles={
  
  body: {
    marginLeft: 130,
    marginRight: 130,
    backgroundColor : '#E0E0E0',
  }
}

class searchPage extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div >
     
       
        <Toolbar className="App" Id='1'/>
        <hr/>
       
          
           
            <br/><div style={{backgroundColor:'#E0E0E0'}}>

        <Flex/>
        </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default searchPage;
