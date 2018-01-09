import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 300,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperExampleSimple = () => (
  <div>
    <Paper style={style} zDepth={1} />
      <Paper style={style} zDepth={1} />
  </div>
);

export default PaperExampleSimple;
