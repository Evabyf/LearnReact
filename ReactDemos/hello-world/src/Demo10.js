/**
 * Created by yudragon on 2016/11/14.
 */
//生命周期
import React,{Component} from 'react';
class Demo10 extends Component{
    constructor(props){
      super(props);
        this.state={opacity:1.0};
    }
    componentDidMount(){
        this.timer=setInterval(function () {
           var opacity=this.state.opacity;
            opacity-=.05;
            if(opacity<0.1){
                opacity=1.0;
            }
            this.setState({opacity:opacity});
        }.bind(this),100);
    }

    render(){
        return(
            <div style={{opacity:this.state.opacity}}>
                Hello {this.props.name}
            </div>
        )
    }

}
export default Demo10;
