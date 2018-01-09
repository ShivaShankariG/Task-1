import React from 'react';
import TextField from 'material-ui/TextField';
//import TextareaAutosize from @buildo/react-textarea-autosize;
const styles ={
  width: 400,
  rows:1,
   cols:20,
  onFocus:"document.getElementById('full-width').rows = 5;"
}
export default class TextArea extends React.Component
{
  render()
  {
 return (
   <div>
<TextField
          id="full-width"
          label="Label"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="What's happening?"
          helperText="Full width!"
          fullWidth
          margin="normal"
          style={styles}

        />
        </div>
      );
    }
  }
