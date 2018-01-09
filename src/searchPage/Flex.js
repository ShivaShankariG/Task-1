import React from 'react';
import Paper from 'material-ui/Paper';
import ProfileBox from './ProfileBox';
import Toolbar from './Toolbar';

import News1 from './News1';
import Suggestion from './Suggestion';
import News2 from './News2';
import Trends from './Trends';
import {lightBlue500 ,grey700 ,yellowA700,white, cyan500, brown900, blue500 } from 'material-ui/styles/colors';
import ChipExampleSimple from './ChipExampleSimple';

const styles ={
  Container: {
    
    //  margin: 10,
    //  height: 1000,
    //  width: 1000,
      display: 'flex',
      flexFlow: 'row  wrap',
       height: 'calc(100vh - 100px)',
      // backgroundColor: '#E0E0E0',
    // justifyContent: 'center',
    //  alignItems :'baseline',
    //  alignContent: 'center',


  },
  Item1: {
    backgroundColor : 'white',
    margin: 10,
    height:100,
    width: 300,
   

          },
  Item2 :{
    backgroundColor : 'white',
    margin: 10,
    height: 100,
    width: 200,
   
  //  flexGrow: 9,


  },
  Item3:{
    backgroundColor : 'white',
    margin: 10,
  //  height: 100,
    width: 300,
  },
  Item4: {
    backgroundColor : 'blue',
    margin: 10,
  //  height: 100,
    width: 100,
},
  Item5: {
    backgroundColor : 'orange',
    margin: 10,
  //  height: 100,
    width: 100,
  },
  Item6: {
    backgroundColor : 'green',
    margin: 10,
    // height: 100,
    width: 100,
}
}




export default class Flex extends React.Component
{
   render()
   {
     return (
       <div style={styles.Container}>
          <div style={styles.Item1}> 
           <Paper zDepth={1} >
             <ProfileBox />
            </Paper>
            <hr/>
           <Paper zDepth={1} >
            <Trends/>
           </Paper>
          </div>
          <div style={styles.Item2}>    
            <Toolbar Id="2"/>
           
            <News2/>
          
   
          </div>
          <div style={styles.Item3}>
            <Suggestion/>
            <ChipExampleSimple/>
           </div> 
      </div>

     );
   }
}
