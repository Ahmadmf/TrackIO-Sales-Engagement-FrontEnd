import React,{Component} from 'react';
import { BsEnvelopeFill} from "react-icons/bs";
import {Button} from "reactstrap";
import { Link } from "react-router-dom";

class Welcome extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <div class="container">
                <div class="jumbotron">
                <div style={{textAlign:"center"}}>
                <BsEnvelopeFill
                                style={{
                                fontSize: "100px",   
                                cursor: "pointer",
                                color:"dark"
                            }}/> 
                </div>
                <div style={{textAlign:"center"}}>
                    <h2>Let's send your first email</h2>
                </div>
                <div style={{textAlign:"center"}}>
                    <h6>In just 3 steps, you can send your first email to a list of contacts we have added for you. You wil be all set up in less than 5 minutes.</h6>
                </div>

                <div style={{textAlign:"center"}}>
                    <Link to="/app/mailBox">
                        <Button type="submit" variant="primary">Getting Started</Button>
                    </Link>
                    </div>
                
                </div>
            </div>
        )
    }
}

export default Welcome