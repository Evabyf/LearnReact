/**
 * Created by yudragon on 2016/11/14.
 */
//this.state
import React,{Component} from 'react';
class Demo8 extends Component{
    constructor(props){
        super(props);
        this.state={liked:false};
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({liked:!this.state.liked});
    }
    render(){
        let text=this.state.liked ? 'like':'have\'t liked';
        return(
            <p onClick={this.handleClick}>
                You {text} this.Click to toggle.
            </p>

        )
    }
}

export  default  Demo8;
