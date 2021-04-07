import React,{Component} from 'react';
import {Button} from "reactstrap";
import {FcGoogle} from "react-icons/fc";
import {SiMicrosoftexchange,SiMicrosoftoutlook} from "react-icons/si";

class connectMailbox extends Component{
    constructor(props){
        super(props)
        this.state = {
            isSignedIn: false,
        }
    }
    componentDidMount(){
        console.log('Loading');
        window.gapi.load('auth2',()=>{
            window.gapi.auth2.init({
                client_id:'973183054317-c796lqkc1uu5i3skgngipgjkshvcajeg.apps.googleusercontent.com'
            })
            console.log('Api inited');
        })
    }




    render(){
        return(
            <div class="container">
                <div class="jumbotron">
                <div style={{textAlign:"center"}}>
                <div style={{textAlign:"center"}}>
                    <h3>First, connect your inbox.</h3>
                </div>
                <div style={{textAlign:"center"}}>
                    <h5>TrackIO support Google, Office 365, Outlook and Exchange.</h5>
                </div>

            
                <div class="row" style={{marginTop:"100px"}}>
                <Button class="col-12">
                    <FcGoogle
                        style={{
                        fontSize: "30px",
                        marginLeft: "15px",
                        marginRight: "15px",
                        cursor: "pointer",
                    }}/>      
                      Connect with Gmail              
                </Button>
                </div>

                <div class="row" style={{marginTop:"25px",textAlign:"center"}}>
                    <p>Or</p>
                </div>

                <div class="row" style={{marginTop:"25px"}}>
                <Button class="col-15">
                    <SiMicrosoftoutlook
                        style={{
                        fontSize: "30px",
                        marginLeft: "15px",
                        marginRight: "15px",
                        cursor: "pointer",
                    }}/>      
                      Connect with Outlook             
                </Button>
            </div>

            <div class="row" style={{marginTop:"25px"}}>
                    <p>Or</p>
            </div>

                <div class="row"  style={{marginTop:"25px"}}>
                <Button class="col-12">
                    <SiMicrosoftexchange
                        style={{
                        fontSize: "30px",
                        marginLeft: "15px",
                        marginRight: "15px",
                        cursor: "pointer",
                    }}/>      
                      Connect with Exchange            
                </Button>
                </div>
                </div>
                
                </div>
            </div>
        )
    }
}

export default connectMailbox;