/**
 * Created by yudragon on 2016/11/14.
 */
import React,{Component} from 'react';
//PropTypes
class Demo6 extends Component{
    render(){
        return (
            <h1>{this.props.title}</h1>
        );
    }
}
Demo6.protoTypes={
    title:React.PropTypes.string.isRequired,
}
Demo6.defaultProps={
    title:'Hello World',
}

export default  Demo6;
