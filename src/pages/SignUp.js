import React,{Component} from 'react';
import revImage from "../assets/images/images.jfif";
import {AiFillLinkedin } from "react-icons/ai";
import "./SignUp.css";
import {Button} from "reactstrap";
import { Link } from 'react-router-dom';


class SignUp extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div class="row">
            <div class="col-6 col-md-4 left" style={{backgroundColor:"black"}}>
                <h2>TrackIO</h2>
                <p>Afforadable, easy-to-use email automation</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h3>What you get with TrackIO</h3>
                <br></br>
                    <p>Increase response rates by 3X</p>
                    <p>Send personalized emails & followups in seconds</p>
                    <p>Get Daily, Weekly and Monthly Report of Your Sales Campaigns</p>
                    <hr class="drawline"></hr>
                    <h3>Our Customer</h3>
                <p>"We chose TrackIO because it had the feature set we needed, it was easy and intuitive to use, and it was at the right price. Our reps hav not only gained precious hours back in their days, but they now have autonomy and flexibitlity"</p>
                <div class="row">
                    <div>
                    <img src={revImage} class="image"></img>
                    </div>
                    <div style={{paddingBottom:"0px"}}>
                        <h3>M M KHAN</h3>
                        <p>CEO OF XYZ</p>
                    </div>

                </div>
            </div>
            <div class="col-12 col-md-8 right">
                <h2 style={{textAlign:"right"}}>Already have an account? <Button type="submit" variant="primary">Sign IN</Button></h2>
                <div class="jumbotron">
                <form>
                    <div style={{textAlign:"center"}}>
                    <h3>Create your Free Account with TrackIO</h3>
                    <p>Easy to use. Be up and running in Minutes</p>
                    <Button>
                    <AiFillLinkedin
                        style={{
                        fontSize: "30px",
                        marginLeft: "15px",
                        cursor: "pointer",
                    }}/>      
                      Sign up with Linkedin                
                    </Button>
                    </div>
                    <div class="row">
                        <hr class="drawline"></hr>OR<hr class="drawline"></hr>
                    </div>
                    <div class="row">
                    <div className="form-group col-6">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>

                    <div className="form-group col-6">
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder="Secondd name" />
                    </div>
                    </div>
                    <div class="row">
                    <div className="form-group col-6">
                        <label>Email(Company Domain)</label>
                        <input type="text" className="form-control" placeholder="" />
                    </div>

                    <div className="form-group col-6">
                        <label>Password</label>
                        <input type="text" className="form-control" placeholder="" />
                    </div>
                    </div>
                    <div style={{textAlign:"center"}}>
                    <Button type="submit" variant="primary">Getting Started</Button>
                    <p>By continuing, you agree to TrackIO's </p><Link>Terms of Service</Link> <p>and</p> <Link>Privacy Policy</Link>
                    </div>
                </form>
                </div>
                
            </div>
            </div>
        )
    }
}
export default SignUp;