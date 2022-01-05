import { useState } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';

let HeaderTemplate=(props)=>{
const message="Hey👋,AYESHA is here!";

return(

<div className="Myclass">
  <h1>Click    to    greet    Me!</h1>
  <br/>
  <button  className="btn" onClick={()=>props.drive(message)}>Click</button>
  
</div>
)
  

   
}

export default HeaderTemplate;

