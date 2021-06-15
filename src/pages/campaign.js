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
class Campaign extends Component{
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
        window.location.reload() ;                  
       
        
    }


    render(){
        return(
            <div class="row">
                <NavSection />


            <div class="col-10 right" >
            <Navbar dark color="light">
                <Nav>
                            <h2>Campaigns</h2>
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
                        
                            {/* <BsFillPlusSquareFill
                                style={{
                                fontSize: "20px",
                                marginLeft: "15px",
                                cursor: "pointer",
                            }}/> */}
                            {/* <Container triggerText={this.triggerText} onSubmit={this.onSubmit} /> */}
                            {/* <Button onClick={this.showModal}>New Campaign</Button> */}
                            {/* <Modal 
                            func={this.getUpdatedDetails}
                            detailsType="AddCampaign"
                            type="EDIT"
                            /> */}
                            <Test
                                func={this.getUpdatedDetails}
                                detailsType="AddCampaign"
                                type="EDIT"
                            />
                    
                    </Nav>
                </Navbar>
                <table className="table mb-0">
                    <thead className="bg-light">
                        <tr className="border-0">
                            <th scope="col" className="border-0">
                                #
                            </th>
                            <th scope="col" className="border-0">
                                Name
                            </th>
                            <th scope="col" className="border-0">
                                CREATED
                            </th>
                            <th scope="col" className="border-0">
                                PROSPECT
                            </th>
                            <th scope="col" className="border-0">
                                REPLIES
                            </th>
                            <th scope="col" className="border-0">
                                STEPS
                            </th>
                            <th scope="col" className="border-0">
                                DUE
                            </th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {this.state.campaigns.map((i,index) => (
                            <>
                            <tr>
                                <td>{index+1}</td>
                                <td><Link to={`/campaign/${i._id}`}>{i.campaignName}</Link></td>
                                <td>{i.createdAt}</td>
                                <td>{i.due}</td>
                                <td>{i.prospect}</td>
                                <td>{i.replies}</td>
                                <td>{i.steps}</td>
                            </tr>
                            </>
                        ))}
                    </tbody>

                </table>

            </div>



            </div>
        )
    }

}

export default Campaign;