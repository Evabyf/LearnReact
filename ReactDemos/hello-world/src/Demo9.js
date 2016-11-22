/**
 * Created by yudragon on 2016/11/14.
 */
import React,{Component} from 'react';

class Demo9 extends Component {
    constructor(props){
        super(props);
        this.state={value:'Hello!'};
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({value:event.target.value});
    }
    render(){
        let value=this.state.value;
        return(
            <div>
                <input type="text" value={value} onChange={this.handleChange}/>
                <p>{value}</p>
            </div>
        )
    }
}

export default Demo9;
