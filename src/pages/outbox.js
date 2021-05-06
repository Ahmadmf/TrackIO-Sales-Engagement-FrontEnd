import React,{Component} from 'react';
import "./campaign.css";
import NavSection from "../components/organisms/organisms/nav-section";
import Test from "../components/Modal/test";
import { BsFillPlusSquareFill,BsFillEnvelopeFill,BsLightning } from "react-icons/bs";
import {Button} from "reactstrap";
import {Nav, Navbar, NavLink} from 'reactstrap';
import C from "../resource/values";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from 'moment';
class Outbox extends Component{
    constructor(props){
        super(props);
        this.state={
            campaigns:[],
        };
    }
    // showModal(e){
    //     console.log("new Campaing Clicked");
    //     this.setState({show:true});
    // }
    // triggerText='New Campaign';
    // onSubmit =(event) =>{
    //     event.preventDefault(event);
    //     console.log("On Submit Clicked")
    //     console.log(event.target.name.value);
    //     console.log(event.target.email.value);
    // }

    componentDidMount = async() => {
        let campaign= await axios.get(C.SERVER_CALL+'/api/campaigns/campaignDetails');
        console.log(campaign.data);
        this.setState({campaigns:campaign.data})
    }

    getUpdatedDetails = async (value) =>{
        //console.log("Get Updated Details");
        console.log(value);
        let campaignData={
            campaignName:value.campaignName,
            dailyProspectNumber:value.dailyProspectNumber
          }
        await axios.post(C.SERVER_CALL+'/api/campaigns/addCampaign',{campaignDetail:campaignData});                   
       
        
    }


    render(){
        return(
            <div class="row">
                <NavSection />


            <div class="col-10 right" >
            <Navbar dark color="light">
                <Nav>
                            <h2>Outbox</h2>
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
                        {/* <Button color="primary" type="button" style={{float: "right"}}>
                        <BsFillPlusSquareFill
                                style={{
                                fontSize: "20px",
                                marginLeft: "15px",
                                cursor: "pointer",
                            }}/> New Template</Button> */}
                            {/* <Container triggerText={this.triggerText} onSubmit={this.onSubmit} /> */}
                    
                            {/* <Modal 
                            func={this.getUpdatedDetails}
                            detailsType="AddCampaign"
                            type="EDIT"
                            /> */}
                            {/* <Test
                                func={this.getUpdatedDetails}
                                detailsType="AddCampaign"
                                type="EDIT"
                            /> */}
                    
                    </Nav>

            </Navbar>

            </div>



            </div>
        )
    }

}

export default Outbox;