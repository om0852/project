// // import React from 'react'
// import React, {useState} from 'react'

// export default function Textarea(props) {
// const clicked=()=>{
//   console.log("clicked")
//   settext("you have clicked on swapnil")
// }
// const changed=(event)=>{
//   settext(event.target.value)
// }

//   const [text , settext] = useState('enter text ');
//   // settext('omsalunke');
//   return (
    

//   )
// }
// import React, { useState } from 'react'
import React,{useState} from 'react'
export default function Textarea(props) {
let email = document.getElementById('exampleFormControlInput1');

const [alertc,setalertc] =useState(" ");
  const [alert,setalert] =useState(" ");
  const onsubmit= ()=>{
    console.log(email.value)
    if(email.value===""){
      console.log("error")
      setalertc("danger");
      setalert("fill the form please!! ");
      setdisplay({
        display:"block"
      })
      setTimeout(() => {
        setdisplay({
          display:"none"
        })
      }, 2000);
    }
    else{
      setalertc("success");
      setalert("form submitted successfully ");
      setdisplay({
        display:"block"
      })
      setTimeout(() => {
        setdisplay({
          display:"none"
        })
      }, 2000);
    }
  }
  const [display,setdisplay] = useState({
      display:"none"
  })


return (
    <div className='containers' style={props.mystyle}>
    <div className='container '>

    
<div class={`alert alert-${alertc}`} role="alert" style={display}>
  {alert}
</div>
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button className='btn btn-primary' type='submit' onClick={onsubmit}>Submit</button>
    </div>
    </div>
  )
}
