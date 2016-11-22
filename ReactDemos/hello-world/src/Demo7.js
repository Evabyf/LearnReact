/**
 * Created by yudragon on 2016/11/14.
 */

//获取真正的DOM节点
import React,{Component} from 'react';

class  Demo7 extends Component {
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
handleClick(){
    console.log(this);
}
render(){
return(
    <div>
        <input type="text" ref="myTextInput"/>
        <input type="button" value="Focus the text input" onClick={this.handleClick}/>
    </div>
)
}
}

export default Demo7