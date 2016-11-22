/**
 * Created by yudragon on 2016/11/14.
 */
import React,{Component} from 'react';


class  Demo5 extends Component{
render(){
    return(
        <ol>
            {
                React.Children.map(this.props.children,function (child) {
                    return <li>{child}</li>
                })
            }
        </ol>
    )
}
}

export default Demo5;
