import React from 'react';
import {lightBlue500 ,grey700 ,yellowA700,white, cyan500, brown900  } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import Rectangle from 'react-rectangle';
import Card from './Card';


 class ProfileBox extends React.Component
{
  render(){
    if(this.props.id=='1'){
    return (
    <div>
      <Rectangle aspectRatio={[4, 1]}>
        <div style={{ background: '#FFA726', width: '100%', height: '100%' }}/ >
      </Rectangle>
      <Card id='1'/>
</div>
    )
  }
  else if(this.props.id=='2'){
    return (
    <div>
      <Rectangle aspectRatio={[4, 1]}>
        <div style={{ background: '#F44336', width: '100%', height: '100%' }}/ >
      </Rectangle>
      <Card id='2'/>
</div>
    )
  }
  }
}
export default ProfileBox;
