import React from 'react';


const styles ={
  Container: {
    backgroundColor : 'yellow',
      margin: 10,
//      height: 1000,
//      width: 1000,
      display: 'flex',
      flexFlow: 'row  wrap',
       height: 'calc(100vh - 100px)',
     //justifyContent: 'center',
    //  alignItems :'baseline',
    //  alignContent: 'center',


  },
  Item1: {
    backgroundColor : 'red',
    margin: 10,
  //  height:100,
    width: 100,
    order: 2,

          },
  Item2 :{
    backgroundColor : 'white',
    margin: 10,
  //  height: 100,
    width: 100,
    order: 1,
    flexGrow: 2,


  },
  Item3:{
    backgroundColor : 'pink',
    margin: 10,
  //  height: 100,
    width: 100,
  },
  Item4: {
    backgroundColor : 'blue',
    margin: 10,
  //  height: 100,
    width: 100,
},
  Item5: {
    backgroundColor : 'orange',
    margin: 10,
  //  height: 100,
    width: 100,
  },
  Item6: {
    backgroundColor : 'green',
    margin: 10,
    // height: 100,
    width: 100,
}
}




export default class Flex extends React.Component
{
   render()
   {
     return (
       <div style={styles.Container}>
          <div style={styles.Item1}>Item1
           </div>
          <div style={styles.Item2}>Item2 hahahahahah </div>
          <div style={styles.Item3}>Item3 </div>
          <div style={styles.Item4}>Item4  </div>
          <div style={styles.Item5}>Item5  </div>

        </div>

     );
   }
}
