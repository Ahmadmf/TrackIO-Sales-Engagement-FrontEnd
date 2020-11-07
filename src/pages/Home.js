import React,{Component} from 'react';
import {Nav, Navbar,NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';
import footer from '../components/organisms/footer/footer';
import NavSection from "../components/organisms/index"
import "./Home.css"
import {BsFillEnvelopeOpenFill} from "react-icons/bs";
import {Button} from "reactstrap";


class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
           <div>
                <NavSection />
                <div className="contianer" style={{paddingTop:"25px"}}>
                    <div className="jumbotron">
                    <h1>
                    A Sales Engagemnet System
               </h1>
               <p>
               <BsFillEnvelopeOpenFill
                  style={{
                    fontSize: "30px",
                    marginLeft: "15px",
                    cursor: "pointer",
                  }}
              />
              Email Tracking System
               </p>
               <p>
               <BsFillEnvelopeOpenFill
                  style={{
                    fontSize: "30px",
                    marginLeft: "15px",
                    cursor: "pointer",
                  }}
              />
              Organize Your Campaign for sales, marketing, and other customer outreach
               </p>
               <p>
               <BsFillEnvelopeOpenFill
                  style={{
                    fontSize: "30px",
                    marginLeft: "15px",
                    cursor: "pointer",
                  }}
              />
              Schedule Your Email- Automate
               </p>
               <p>
               <BsFillEnvelopeOpenFill
                  style={{
                    fontSize: "30px",
                    marginLeft: "15px",
                    cursor: "pointer",
                  }}
              />
              Visulaize Emails Campaigns through Our System
               </p>
               <Link to="/sign_up"><Button variant="primary">SignUp Free</Button></Link>


                    </div>
                </div>
               {footer()}
           </div>

        );
    }
}
export default Home;