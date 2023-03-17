import React from 'react'


export default function Results(props) {
  // console.log("*********", props.data);
  if (props.data) {

 return <div style={{width:'500px'}}>
 <pre >{props.data}</pre> </div>
  } 
  else {
    return null
  }

}

