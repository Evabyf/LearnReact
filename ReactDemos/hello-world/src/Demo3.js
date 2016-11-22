/**
 * Created by yudragon on 2016/11/9.
 */
import React, {Component} from 'react';

class Demo3 extends Component {
render(){
    let names=[<h1 key="1">Hello,world!</h1>,<h2 key="2">React is awesome</h2>];
    return(
        <div>
            {names}
        </div>
    )
}
}
export default Demo3;
