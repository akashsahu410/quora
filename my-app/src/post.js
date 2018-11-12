import React,{Component} from 'react'
import Showpost from './showpost'
class Post extends Component{
    constructor(props){
        super(props);
        this.state={
            name:localStorage.getItem("name"),
            question:"",
            date:new Date().toLocaleDateString(),
            answer:[],
            dataValid:"",
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    sendData=(e)=>{
        e.preventDefault();
        console.log("state",this.state)
        if(this.state.question.length > 0)
        {
            this.setState({dataValid:""})
            let options={
                method:"POST",
                headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
                },
                body:JSON.stringify(this.state)
            }
            this.setState({question:""})
            fetch("http://localhost:8085/profile/question",options)
            .then(res=>{
                console.log("response",res)
                return res.json();
            })
            .then(data=>{
                console.log("data fetched",data)
                console.log("props",this.props)
                window.location.reload()
                // this.props.param.history.push('/profile')
            })
            .catch(err=>{
                console.log("error in fetch all",err)
            })
        }
        else{
            this.setState({dataValid:"Cannot be empty"})
        }
        
    }
    render(){
        return(
            <div>
                <div className="container" style={{marginTop:"3%"}}>
                    <div class="form-group">
                        <label>{this.state.name}</label>
                        <textarea class="form-control rounded-0 col-md-11" onChange={this.handleChange} name="question" value={this.state.question} placeholder="What is your question or link?" rows="3"></textarea>
                        <p>{this.state.dataValid}</p><br/>
                        <button type="button" class="btn-sm btn-danger" onClick={this.sendData}>Submit</button>
                    </div>
                    <Showpost/>
                </div>
            </div>
        )
    }
}
export default Post;