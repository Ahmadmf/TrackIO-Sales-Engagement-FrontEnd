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
class Reporting extends Component{
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
                            <h2>Team Overview</h2>
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


            <table className="table mb-0">
                    <thead className="bg-light">
                        <tr className="border-0">
                            <th scope="col" className="border-0">
                               
                            </th>
                            <th scope="col" className="border-0">
                                EMAILS SENT
                            </th>
                            <th scope="col" className="border-0">
                                CALLS COMPLETED
                            </th>
                            <th scope="col" className="border-0">
                                TASKS COMPLETED
                            </th>
                            <th scope="col" className="border-0">
                                PROSPECTS CONTACTED
                            </th>
                            <th scope="col" className="border-0">
                                PROSPECTS REPLIED
                            </th>
                            <th scope="col" className="border-0">
                                NEW PROSPECTS CONTACTED
                            </th>
                        </tr>
                    </thead>
                    
                    <tbody>
                            <tr>
                                <td>Everyone</td>
                                <td>1</td>
                                <td>0</td>
                                <td>0</td>
                                <td>1</td>
                                <td>0</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Firoz Ahmad</td>
                                <td>1</td>
                                <td>0</td>
                                <td>0</td>
                                <td>1</td>
                                <td>0</td>
                                <td>2</td>
                            </tr>
                    </tbody>

                </table>

            </div>
            
            </div>
        )
    }

}

export default Reporting;