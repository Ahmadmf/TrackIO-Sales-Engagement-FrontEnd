import React,{Component} from 'react';
import "./campaign.css";
import NavSection from "../components/organisms/organisms/nav-section";
import { BsFillPlusSquareFill,BsFillEnvelopeFill,BsLightning } from "react-icons/bs";
import {Button} from "reactstrap";
import {Nav, Navbar, NavLink} from 'reactstrap';
import C from "../resource/values";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from 'moment';
import Test from "../components/TemplateModel/index";
class Template extends Component{
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
                            <h2>Templates</h2>
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
                            <Test
                                func={this.getUpdatedDetails}
                                detailsType="AddCampaign"
                                type="EDIT"
                            />
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

            <table className="table mb-0">
                    <thead className="bg-light">
                        <tr className="border-0">
                            <th scope="col" className="border-0">
                                NAME
                            </th>
                            <th scope="col" className="border-0">
                                CREATED
                            </th>
                            <th scope="col" className="border-0">
                                SENT
                            </th>
                            <th scope="col" className="border-0">
                                OPENED
                            </th>
                            <th scope="col" className="border-0">
                                CLICKED
                            </th>
                            <th scope="col" className="border-0">
                                REPLIED
                            </th>
                        </tr>
                    </thead>
                    
                    <tbody>
                            <tr>
                                <td>Big Festival - by Firoz Ahmad</td>
                                <td>Aug 14</td>
                                <td>0</td>
                                <td>0%</td>
                                <td>0%</td>
                                <td>0%</td>
                            </tr>
                            <tr>
                                <td>Donation - by M.H AHMAD</td>
                                <td>Jul 30</td>
                                <td>5</td>
                                <td>7%</td>
                                <td>2%</td>
                                <td>1%</td>
                            </tr>
                    </tbody>

                </table>

            </div>



            </div>
        )
    }

}

export default Template;