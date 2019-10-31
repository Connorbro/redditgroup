import React from 'react';
const Card=(props)=>{
    return(
      <div className = "card">
        <div className = "card_img">
        <img src ={props.pic}/>
  
        </div>
        <h4>{props.text}</h4>
        <span><p>{props.topic}</p></span>
        <Text text={props.text}topic={props.topic}/>
      </div>
      
    )
  
  }