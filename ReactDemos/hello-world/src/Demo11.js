/**
 * Created by yudragon on 2016/11/14.
 */
//Ajax
import React,{Component} from 'react';

class  Demo11 extends Component{
    constructor(props){
       super(props);
        this.state={username:'',lastGistUrl:''}
    }
    componentDidMount(){
        $.get(this.props.source,function (result) {
            let lastGist=result[0];
            if(this.isMounted()){
                this.setState({
                    username:lastGist.owner.login,
                    lastGistUrl:lastGist.html_url
                });
            }
        }.bind(this))
    }
    render(){
        return(
            <div>
                {this.state.username}'s last gist is <a href={this.state.lastGistUrl}>here</a>
            </div>
        )
    }
};

export  default Demo11;
