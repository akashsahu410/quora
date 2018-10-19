import React,{Component} from 'react'
import Question from './question'
import Showpost from './showpost'
class Post extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div>
                <div className="container" style={{marginTop:"3%"}}>
                    <Question/>
                    <Showpost/>
                </div>
            </div>
        )
    }
}
export default Post;