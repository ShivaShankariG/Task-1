import React from 'react';
import './App.css';
const styles={

NewsParent:
{
  width: '100%',
},
dp:{
  width: '30%',
},
News:{
   textAlign: 'center',
   fontSize: '100%',
   width: '90',

 }
};
class Newsfeed extends React.Component
{

    constructor(props) {
      super(props);

      };
    render (){
    return (
      <div style={styles.NewsParent}>
        
        <div style={styles.News}>
          <span >
              < a href= "www.google.com" >BombayTimes</a>  @bombaytimes . 2m
          </span>
          <p>.@Varun_dvn with wrestler @TripleH...He is a superstar and he met him and got him seats. He also went and announced a match and the crowd went crazy!</p>
          <img src="https://pbs.twimg.com/media/DQna5l1U8AA8hj5.jpg:large" width= '50%' height='50%' />
          <p>VarunDhawan.Net, Varun Dhawan FanClub, Varun Dhawan FC and 3 others</p>
        </div>
      </div>
    );
  }
}
export default  Newsfeed;
