import React from 'react'
import {Link} from 'react-router-dom'
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        const homecss={
            margin:20,
            width:100,
            backgroundColor:"#e11c26",
            color:"white"
          }
        return(
            <div>
                <div style={{backgroundColor:"#8be4e2"}}>
                <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor:"#e11c26"}}>
                    <h1 style={{color:"white",paddingLeft:"2rem"}}>Quora</h1>                    
                </nav>
            
                <center>
                    <Link to="/login"> <button class="btn" style={homecss}>Login</button></Link>
                    <Link to="/signup"> <button style={homecss} class="btn">Signup</button></Link>
                    <img src="img/2.jpeg" className="img-responsive" alt="quora"/>
                </center>
                </div>
          </div>
        )
    }
}
export default Home