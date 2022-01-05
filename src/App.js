import logo from './logo.svg';
import './App.css';
import HeaderTemplate from './header/header';
import { useState } from 'react';


 function App(){
  const [drive, setDrive] = useState('');
  function ParentAlert(message){
    
    let nameBox = document.createElement("div");    // Creates the div 
nameBox.innerText = message;   // Injects the string into the div
document.body.append(nameBox);  
// nameBox.style.width = "100px";
// nameBox.style.height = "100px";
nameBox.style.color = "orange";
nameBox.style.marginTop="50px";
nameBox.style.fontSize="30px";

  
   
 }
 

return(

<div  className='MyId'>
    <HeaderTemplate drive={ParentAlert}/>
    

</div>
 
)


 }      

export default App;