import React,{Component} from 'react';
import "./campaign.css";
import NavSection from "../components/organisms/organisms/nav-section";
import Test from "../components/Modal/test";
import { BsFillPlusSquareFill,BsFillEnvelopeFill,BsLightning } from "react-icons/bs";
import {Button} from "reactstrap";
import {Nav, Navbar, NavLink} from 'reactstrap';
import C from "../resource/values";
import axios from "axios";
import NavBar from "../components/organisms/organisms/resource-navbar/index"
import { Link } from "react-router-dom";
import Moment from 'moment';
class Resources extends Component{
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
        
            <div>
                 <NavBar />
                 <div class="container">
                     <div class="jumbotron">
                         <h3>TrackIO Features</h3>

                         <strong> Sales Campaigns</strong>
                         <p> Multi-touch sales campaigns</p>
                         <p> Email, Phone, Task Steps</p>
                     </div>
                 </div>
                {/* <NavBar />*/}


            {/* <div class="col-10 right" >
            <Navbar dark color="light">
                <Nav>
                            <h2>Resources</h2>
                </Nav>
            </Navbar>

            </div> */}



            </div>
        )
    }

}

export default Resources;