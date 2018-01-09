import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
 
const styles={

  relative :{
    position: 'relative',
    width: 250,
    height: 30,
    border: "2px solid grey",
    borderRadius:"10px",
    margin: 10

},

absolute: {
    position: 'absolute',
    top: 15,
    right: 20,
    bottom:20,

    width: 40,
    height: 40

},
};


const rightButtons = (
  <div >
    <FlatButton label="About" />
    <FlatButton label="Home"  />
  </div>
);

const AppBarExampleIcon = () => (
  <AppBar 
    title="aadhaar"
  
  style={styles.relative}
  iconElementRight={rightButtons}/>
);

export default AppBarExampleIcon;
