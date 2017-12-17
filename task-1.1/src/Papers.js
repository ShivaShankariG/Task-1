import React from 'react';
import Paper from 'material-ui/Paper';
import ProfileBox from './ProfileBox';
import Toolbar from './Toolbar';
import Newsfeed from './Newsfeed';
import News1 from './News1';
import Suggestion from './Suggestion';
import News2 from './News2';
import Trends from './Trends';
import {lightBlue500 ,grey700 ,yellowA700,white, cyan500, brown900, blue500 } from 'material-ui/styles/colors';
import ChipExampleSimple from './ChipExampleSimple';


const styles={
  Container1:{
    marginLeft: '100px',
    marginRight: '100px',
    maxWidth:'70%',
    display: 'flex',

    height: '200px',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
},
Container2:{

  maxWidth:'100%',
  display: 'flex',

  height: '260px',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
},

Child1:{
  flex: 1,
maxWidth: '30%',
},
Child2:{
  flex: 3,
maxWidth: '60%',
marginRight: '90px',
},
test: {
    textAlign: 'center',
},
h :{
    display: 'inline-block',
    marginRight:'20px',
},
h3 :{
  textAlign: 'left',
  marginRight: '20px',
  marginLeft: '20px',
},
a:{

marginRight: '20px',
},
p:{
marginRight: '20px',
marginLeft: '20px',
fontSize:'80%',
textAlign: 'left',
color: '#BDBDBD',
},

c1:{
  marginLeft: '2%',
  maxWidth: '45%',
},

c2:{
  maxWidth: '45%',
},
};


class ExampleComponent extends React.Component {
  render() {
    return (
      <div>
          <div style={styles.Container1}>

            <Paper zDepth={1} style={styles.Child1}>

                          <Paper zDepth={1} >
                                          <div style={styles.test}>
                                            <h3 style={styles.h}>Search filters  </h3><a href="www.google.com"  style={{color:lightBlue500 }} >Show  </a>
                                          </div>
                                        </Paper>
                          <hr/>

                          <Paper zDepth={1} >
                                      <div style={styles.test}>
                                      <h3 style={styles.h}>Related searches </h3>
                                      <h3 style={styles.h3} ><a href="www.google.com"  style={{color:lightBlue500 }} >Kapil sibalL  </a></h3>
                                      <h3 style={styles.h3} ><a href="www.google.com"  style={{color:lightBlue500 }} >bombay high court </a></h3>
                                      <h3 style={styles.h3} ><a href="www.google.com"  style={{color:lightBlue500 }} >#aadhaar </a></h3>
                                      <h3 style={styles.h3} ><a href="www.google.com"  style={{color:lightBlue500 }} >#chaupal </a></h3>
                                      <h3 style={styles.h3} ><a href="www.google.com"  style={{color:lightBlue500 }} >#nandos195</a></h3>
                                      <br/>
                                      </div>
                          </Paper>
                          <hr/>
                          <Paper zDepth={1} >
                            <Suggestion/>

                            <ChipExampleSimple/>
                          </Paper>
                          <hr/>
                          <Paper zDepth={1} >
                            <Trends/>
                          </Paper>


            </Paper>

            <Paper zDepth={1} style={styles.Child2}>

              <br/>
                <h3>People</h3>
                    <Paper Zdepth={1} style={styles.Container2}>

                      <Paper Zdepth={1} style={styles.c1} >
                        <ProfileBox id='1'/>

                      </Paper>

                      <Paper Zdepth={1} style={styles.c2}>
                      <ProfileBox id='2'/>

                      </Paper>
                      <br/>


                    </Paper>
              <News1/>
              <News2/>
            </Paper>





          </div>
      </div>
    )
  }
}
export default ExampleComponent;
