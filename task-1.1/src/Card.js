import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import './App.css';
import {lightBlue500 ,grey700 ,yellowA700,white, cyan500, brown900, blue500 } from 'material-ui/styles/colors';


const handle=<a href="www.google.com ">Shiva</a>
const aa=<a href="wwww.google.com">Aadhaar</a>
const Rita=<a href="wwww.google.com">Rita Banerji</a>

export default class CardExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render() {
    if(this.props.id=='1'){
    return (
      <Card>
        <CardHeader
          title= {aa}
          subtitle="@UIDAI ‏"
          avatar="https://cdn.ndtv.com/tech/images/gadgets/thumbs/aadhaar_thumb.jpg"/>

          <CardText>
          Official Twitter account of the Unique Identification Authority of India.
          </CardText>

      </Card>
    );
  }
  else if(this.props.id=='2')
  {
    return (
      <Card>
        <CardHeader
          title= {Rita}
          subtitle="@Rita_Banerji"
          avatar="https://pbs.twimg.com/profile_images/923961884029599744/zoZHOAJ0_bigger.jpg"/>
      <CardText>
      writer • feminist • author of <a href="www.google.com" style={{color:lightBlue500 }}>@sexandpower</a> • founder of <a href="www.google.com" style={{color:lightBlue500 }}> @50millionmissin</a> •
      </CardText>

      </Card>
    );
  }
}
}
