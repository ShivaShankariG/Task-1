import React from 'react';
import Paper from 'material-ui/Paper';
import ProfileBox from './ProfileBox';
const styles = {
  div:{
    display: 'flex',
    flexFlow: 'row wrap',
    justifycontent: 'center',
    padding: 20,
    height :'100%',
    width: '90%'
  },
  div2:{
    display: 'flex',
    flexDirection: 'column',

    height :'100%',
    width: '90%'
  },
  paperSide:{
    flex: 1,

    height: '50%',
    margin: 10,
    textAlign: 'center',
    padding: 10
  },
  paperCenter:{

    flex: 4,
    margin: 10,
    textAlign: 'center',
  }

};

class ExampleComponent extends React.Component {
  render() {
    return (
      <div>
        <div style={styles.div}>

          <Paper zDepth={1} style={styles.paperSide}>
            <ProfileBox/>
          </Paper>

          <Paper zDepth={1} style={styles.paperCenter}>
            <Paper zDepth={1} style={styles.paperSide}>
                <img src="https://pbs.twimg.com/profile_images/586157923484598272/HOsJcobJ.jpg" width='20%' height='20%'/>
            </Paper>
              <h4>Second Vertical component Second Vertical component Second Vertical component Second VSecond Vertical component Second Vertical component Second Vertical component Second Vertical component Second Vertical component Second Vertical component Second Vertical component Second Vertical component Second Vertical component Second Vertical component Second Vertical component Second Vertical component ertical component Second Vertical component Second Vertical component Second Vertical component Second Vertical component Second Vertical component Second Vertical component Second Vertical component Second Vertical component Second Vertical component Second Vertical component Second Vertical component Second Vertical component </h4>
          </Paper>

          <Paper ZDepth={1} style ={styles.paperSide}>
            <h4> whatever..</h4>
          </Paper>

        </div>
      </div>
    )
  }
}
export default ExampleComponent;
