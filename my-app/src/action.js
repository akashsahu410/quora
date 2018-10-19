import React,{Component} from 'react'
import Answer from './answer'
import {connect} from 'react-redux'
class Action extends Component{
    constructor(props){
        super(props);
        this.state={
            show_answer_component:false,
            question_id:props.param,
            upvote:localStorage.getItem("name"),
            refresh:"",
            like_param:props.likeParam,
            upvote_click:true
        }
    }
    componentDidMount(){
        console.log("getting props",this.state.like_param)
        let length=this.state.like_param.length
        for(let i=0;i<this.state.like_param.length && length > 0;i++)
        {
            console.log("inside for loop")
            if(this.state.like_param[i]===this.state.upvote)
            {
                this.props.data.upvote_toggle=true
                this.setState({upvote_click:false})
                break;
            }
        }
    }
    toggle_upvote=()=>{
        console.log("inside the function of toggle")
        if(this.props.data.upvote_toggle === true){
            this.props.data.upvote_toggle=false
        }
        else{
            this.props.data.upvote_toggle=true
        }
    }
    like=(e)=>{
        e.preventDefault()
        this.setState({upvote_click: !this.state.upvote_click})
        if(this.props.data.upvote_toggle === false)
        {
            this.toggle_upvote()
            // this.props.data.like_count = this.props.data.like_count + 1
            console.log("if block",this.props.data.upvote_toggle)
        }
        else{
            this.toggle_upvote()
            // this.props.data.like_count = this.props.data.like_count - 1
            console.log("else block",this.props.data.upvote_toggle)
        }
        console.log("state of upvote",this.state)
            let options={
                method:"POST",
                headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
                },
                body:JSON.stringify({"upvotetoggle":this.props.data.upvote_toggle,"name":this.state.upvote,"_id":this.state.question_id})
            }
            fetch("http://localhost:8085/profile/upvote",options)
            .then(res=>{
                console.log("response",res)
                return res.json();
            })
            .then(data=>{
                console.log("data fetched",data)
                this.setState({refresh:"hi"})   //its only to re render
            })
            .catch(err=>{
                console.log("error in fetch all",err)
            })
                  

    }
    toggle=()=>{
        console.log("inside the function of toggle")
        if(this.state.show_answer_component === true){
            this.setState({show_answer_component:false})
        }
        else{
            this.setState({show_answer_component:true})
        }
    }
    render(){
        let upvote_css = this.state.upvote_click ? {color:"#39a3ff"} :{color:"#e11c26"}
        return(
            <div>
                <p><b>
                            <a href="#" style={{color:"#39a3ff"}} onClick={this.toggle}>Answer</a>&nbsp;&nbsp;&nbsp;
                            <a href="#" style={upvote_css} onClick={this.like}>Upvote </a>&nbsp;&nbsp;&nbsp;
                            
                            </b>
                </p>
                {this.state.show_answer_component === true ? <Answer param={this.state.question_id} off={this.toggle}/> : ""}
            </div>
        )
    }
}
const mapStateToProps=state=>{
    console.log("State",state)
    return{
      data:state
    }
  }
  export default connect(mapStateToProps)(Action)