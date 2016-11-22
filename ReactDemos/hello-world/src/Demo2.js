import React, { Component } from 'react';


class Demo2 extends Component{
   render(){
       let names=['Alice','Emily','Kate'];
       return(
           <div>
               {
               names.map((name)=>{return <div key={name} >Hello!{name}</div>})
           }
           </div>
       )
   }
}
export default Demo2;