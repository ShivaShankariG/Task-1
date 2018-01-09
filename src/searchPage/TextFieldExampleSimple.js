import React from 'react';
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';


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

class TextFieldExampleSimple extends React.Component
{
  render()
  {
 return (
   <div>
    <TextField

    hintText={this.props.hinttext}
    style={styles.relative}
  />
    {this.props.hinttext==='search' ?  ( <SearchIcon  color ="#9E9E9E"  style={styles.absolute}/> ): (<div></div>) }

  </div>
);
}
}
 export default TextFieldExampleSimple;
