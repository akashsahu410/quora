import React from 'react'
import Post from './post'
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    logout=()=>{
        localStorage.removeItem("email")
        this.props.history.push('/login')
    }
    render(){
        return(
            <div>
            <nav style={{backgroundColor:"#e11c26"}}>
              <div className="container">
                  <h1 style={{color:"white"}}>Quora <button class="btn" style={{float:"right",backgroundColor:"white",color:"#e11c26"}} onClick={this.logout}>Logout</button></h1>
                  
                <div class=" w3-xlarge">
                    <input type="text" class="form-control input-sm" placeholder="Search Quora"/>&nbsp;<a href=""><i class="fa fa-search" style={{color:"white"}}></i></a>
                    
                 </div>
              </div>
            </nav>
            {/* Post Content */}
                <Post/>
          </div>
        )
    }
}
export default Profile