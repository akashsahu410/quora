import React,{Component} from 'react'
import Action from './action'

class Showpost extends Component{
    constructor(props){
        super(props);
        this.state={
            posthistory:"",
            refresh:""
        }
    }
    
    componentDidMount(){
        console.log("insdie the did mount ")
        let options={
            method:"POST",
            headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
            },
        }
        fetch("http://localhost:8085/profile/getposts",options)
        .then(res=>{
            console.log("response",res)
            return res.json();
        })
        .then(data=>{
            console.log("data fetched",data)
            this.setState({posthistory:data})
            console.log("post history",this.state.posthistory)
            
        })
        .catch(err=>{
            console.log("error in fetch all",err)
        })
        
    }
    
    
    render(){
        return(
            <div>
                    {this.state.posthistory.length >0 ? (this.state.posthistory.map(x=>

                    (<div class="panel panel-default">
                        <div class="panel-heading">Answer&nbsp;&nbsp;.&nbsp;&nbsp;Recommended for You</div>
                        <div class="panel-body">
                        <b><h2>{x.question}</h2></b>
                        <p style={{paddingLeft:15}}><h5>{x.name}</h5></p>
                        <p style={{paddingLeft:15}}>Posted {x.date}</p>
                        {x.answer.map(key=>
                        (
                            <p><b>{key.name}&nbsp;&nbsp;</b>{key.date}
                                 <br/>   {key.comment}
                            </p>
                        )
                        )}
                        
                        <Action param={x._id} likeParam={x.upvote}/>
                        
                    </div>
                    
                    </div>)
                    )) : ""}
                           
                         
            </div>
        )
    }
}
// const mapStateToProps=state=>{
//     console.log("State",state)
//     return{
//       data:state
//     }
//   }
  export default Showpost