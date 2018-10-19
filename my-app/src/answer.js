import React,{Component} from 'react'

class Answer extends Component{
    constructor(props){
        super(props);
        this.state={
            comment:"",
            name:localStorage.getItem("name"),
            date:new Date().toLocaleDateString(),
            question_id:props.param,
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    sendData=(e)=>{
        e.preventDefault();
        console.log("state",this.state,this.state.question_id)
            let options={
                method:"POST",
                headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
                },
                body:JSON.stringify(this.state)
            }
            this.props.off()
            fetch("http://localhost:8085/profile/answer",options)
            .then(res=>{
                console.log("response",res)
                return res.json();
            })
            .then(data=>{
                console.log("data fetched",data)
                
            })
            .catch(err=>{
                console.log("error in fetch all",err)
            })
    }
    render(){
        return(
            <div>
                <div className="container">
                <div class="form-group">
                    
                    <textarea class="form-control rounded-0 col-md-11" onChange={this.handleChange} name="comment" value={this.state.comment} rows="3"></textarea>
                    <button type="button" class="btn-sm btn-danger" onClick={this.sendData}>Comment</button>
                </div>
                </div>
            </div>
        )
    }
}
export default Answer;