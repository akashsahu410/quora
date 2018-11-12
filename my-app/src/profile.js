import React from 'react'
import Post from './post'
import {connect} from 'react-redux'

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            search:"",
            post_show:true
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value.toLowerCase()})
    }
    post_toggle=()=>{
          if(this.state.post_show === true)
          {
              this.setState({post_show:false})
          }
          else{
            this.setState({post_show:true})
          }
    }

    logout=()=>{
        localStorage.removeItem("email")
        this.props.history.push('/login')
    }
    sendData=(e)=>{
        e.preventDefault();
        console.log("inside the send data of search")
        if(this.state.search.length > 0){
            let search_array=this.state.search.split(" ")       //splitting text into array
            console.log("array split",search_array,this.props.data.check)
            let dictionary=[...this.props.data.check]           //dictionary in redux
            let flag,res=[];

            //searching text with dictionary
            for(let i=0;i<search_array.length;i++)
            {   flag=0
                for(let j=0;j<dictionary.length;j++)
                {
                    if(search_array[i] === dictionary[j])
                    {
                        flag=1
                        break
                    }
                }
                if(flag === 0){
                    res.push(search_array[i])                
                }
            }
            console.log("result array",res)
        }
    }
    render(){
        return(
            <div>
            <nav style={{backgroundColor:"#e11c26"}}>
              <div className="container">
                  <h1 style={{color:"white"}}>Quora <button class="btn" style={{float:"right",backgroundColor:"white",color:"#e11c26"}} onClick={this.logout}>Logout</button></h1>
                  
                <div class=" w3-xlarge">
                    <input type="text" name="search" onChange={this.handleChange} onFocus={this.post_toggle} onBlur={this.post_toggle} class="form-control input-sm" placeholder="Search Quora"/>&nbsp;
                    <a href="" onClick={this.sendData}><i class="fa fa-search" style={{color:"white"}}></i></a>
                    
                 </div>
              </div>
            </nav>
            {/* Post Content */}
               {this.state.post_show === true ? <Post param={this.props}/> :""}
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
export default connect(mapStateToProps)(Profile)