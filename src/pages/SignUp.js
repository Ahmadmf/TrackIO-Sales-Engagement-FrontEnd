import React,{Component} from 'react';
import revImage from "../assets/images/images.jfif";
import {AiFillLinkedin } from "react-icons/ai";
import "./SignUp.css";
import {Button} from "reactstrap";
import { Link } from 'react-router-dom';
import C from "../resource/values";
import axios from "axios";
// import {signUpUser} from "../actions/authActions";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import PropTypes from "prop-types";

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state ={
            firstName:"",
            lastName:"",
            email:"",
            password:""
        }
        this.onChange =this.onChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        // this.callApi()
        //   .then(res => this.setState({response: res.express}))
        //   .catch(err => console.log(err));
    }

    // componentDidMount() {
    //     this.callApi()
    //       .then(res => this.setState({response: res.express}))
    //       .catch(err => console.log(err));
    //   }
    //   callApi = async () => {
    //     console.log('api called');
    //     const response =await fetch(C.SERVER_CALL+'/api/auth/hello');
    //     const body =await response.json();
    //     console.log(body);
    //     if(response.status !=200) throw Error(body.message);
      
    //     return body;
    //   };

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    handleSignUp(e){
          e.preventDefault();
          const newUser ={
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              email: this.state.email,
              password:this.state.password
          }
          console.log(newUser);
        //   this.props.signUpUser(newUser,this.props.history);
          
          //const response = fetch(C.SERVER_CALL+'/api/auth/signUp')
          axios.post(
                C.SERVER_CALL+"/api/auth/signUp",newUser)
                .then((res) =>{
                    console.log(res.data);
                    window.open("/app/welcome");
                    // history.push("/app/campaign");
                })
        //    const body= response.json();
        //     console.log(body);
          
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
                    <img src={revImage} class="image" alt="description"></img>
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
                <form onSubmit={this.handleSignUp}>
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
                        <input 
                        type="text"
                        name="firstName"
                        value={this.state.firstName} 
                        className="form-control" 
                        placeholder="First name"
                        onChange={this.onChange} />
                    </div>

                    <div className="form-group col-6">
                        <label>Last Name</label>
                        <input type="text"
                         name="lastName"
                         value={this.state.lastName} 
                         className="form-control"
                         placeholder="Second name"
                         onChange={this.onChange} />
                    </div>
                    </div>
                    <div class="row">
                    <div className="form-group col-6">
                        <label>Email(Company Domain)</label>
                        <input type="text"
                        name="email"
                        value={this.state.email} 
                        className="form-control" 
                        placeholder=""
                        onChange={this.onChange} />
                    </div>

                    <div className="form-group col-6">
                        <label>Password</label>
                        <input type="password" 
                         name="password"
                         value={this.state.password}
                         className="form-control"
                         placeholder="" 
                         onChange={this.onChange}/>
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

// const mapStateToProps = (state) => ({
//     auth:state.auth,
//     errors: state.errors,
// })


export default SignUp;
// export default connect(mapStateToProps, { signUpUser })(withRouter(SignUp));