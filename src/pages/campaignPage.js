import React, {Component} from "react";
import NavSection from "../components/organisms/organisms/nav-section";
import {Nav, Navbar, NavLink} from 'reactstrap';
import { BsFillPlusSquareFill,BsFillEnvelopeFill,BsLightning } from "react-icons/bs";
import axios from "axios";
import C from "../resource/values";
import {Button} from "reactstrap";
import CampaignModal from "../components/CampaignModel/index";

class campaignPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            campaignData:{},

        }
    }

    componentDidMount = async () =>{
        axios.get(C.SERVER_CALL+`/api/campaigns/${this.props.match.params.id}`)
        .then((res) => {
            console.log(res.data);
            this.setState({campaignData:res.data});
        } )
    }

    getUpdatedDetails = async (value) =>{
        //console.log("Get Updated Details");
        console.log(value);
        let emailData={
            receiverMail:value.receiverMail,
            subject:value.subject,
            message:value.message
          }
      await axios.post(C.SERVER_CALL+'/api/email/sendCampaignEmail',{emailDetail:emailData});                   
       
        
    }

    render(){
        return(
            <div class="row">
                 <NavSection />

            <div class="col-10 right" >
            <Navbar dark color="light">
                <Nav>
                            <h2>{this.state.campaignData.campaignName}</h2>
                </Nav>
                    <Nav>
                        <NavLink href="/sign_up">
                        <BsLightning
                                style={{
                                fontSize: "20px",
                                marginLeft: "15px",
                                cursor: "pointer",
                            }}/>
                        </NavLink>
                        <NavLink href="/logIn" >
                        <BsFillEnvelopeFill
                                style={{
                                fontSize: "20px",
                                marginLeft: "15px",
                                cursor: "pointer",
                            }}/>
                        </NavLink>
                    </Nav>
                </Navbar>
                <div class="container">
                    <div class="jumpotron">
                        <CampaignModal
                        func={this.getUpdatedDetails}
                        />
                    </div>
                </div>
        </div>
      

            </div>
        )
    }

}
export default campaignPage;