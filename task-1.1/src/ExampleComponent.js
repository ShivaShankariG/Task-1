import React from 'react';
import Paper from 'material-ui/Paper';
import ProfileBox from './ProfileBox';
import Toolbar from './Toolbar';
import Newsfeed from './Newsfeed';
import News1 from './News1';
const styles = {
Containerr:{
    display: 'flex',
    alignItems: 'flex-start',
    height: '100%',
    width: '100%',
    justifyContent : 'space-between',

      },
      Containerr:{
          display: 'flex',
          alignItems: 'flex-start',
          height: '100%',
          width: '100%',
          justifyContent : 'space-between',

            },
paperSide:{
    flex: 1,
    maxWidth: '20%',
  },
  paperCenter:{
    flex: 5,
    maxWidth: '50%',
  }
};

class ExampleComponent extends React.Component {
  render() {
    return (
      <div>
        <div style={styles.Containerr}>
        <Paper zDepth={1} style={styles.paperSide}>
            <ProfileBox/>
        </Paper>

        <Paper zDepth={1} style={styles.paperCenter}>
        <Toolbar Id='2'/>
        <br/>


              <News1/>
      </Paper>
        <Paper ZDepth={1} style ={styles.paperSide}>
            <h4> Who to follow?</h4>
          </Paper>
        </div>
      </div>
    )
  }
}
export default ExampleComponent;
