import React,{Component} from 'react';
import "./campaign.css";
import NavSection from "../components/organisms/organisms/nav-section";
import { BsFillPlusSquareFill,BsFillEnvelopeFill,BsLightning } from "react-icons/bs";
import {Button} from "reactstrap";
import {Nav, Navbar, NavLink} from 'reactstrap';
import C from "../resource/values";
import axios from "axios";
import Test from "../components/ProspectModel/index";
import { Link } from "react-router-dom";
class Prospect extends Component{
    constructor(props){
        super(props);
        this.state={
            prospects:[],
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
        let prospect= await axios.get(C.SERVER_CALL+'/api/prospects/prospectDetails');
        console.log(prospect.data);
        this.setState({prospects:prospect.data});
    }

    getUpdatedDetails = async (value) =>{
        //console.log("Get Updated Details");
        console.log(value);
        // let campaignData={
        //     campaignName:value.campaignName,
        //     dailyProspectNumber:value.dailyProspectNumber
        //   }
         await axios.post(C.SERVER_CALL+'/api/prospects/addProspect',{prospectDetail:value});                   
       
        
    }


    render(){
        return(
            <div class="row">
                <NavSection />


            <div class="col-10 right" >
            <Navbar dark color="light">
                <Nav>
                            <h2>Prospects</h2>
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
                        <NavLink href="" >
                                IMPORTS
                        </NavLink>
                        
                        
                        {/* <Button color="primary" type="button" style={{float: "right"}}>
                        <BsFillPlusSquareFill
                                style={{
                                fontSize: "20px",
                                marginLeft: "15px",
                                cursor: "pointer",
                            }}/> Add Prospect</Button> */}
                            {/* <Container triggerText={this.triggerText} onSubmit={this.onSubmit} /> */}
                    
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
                                email
                            </th>
                            <th scope="col" className="border-0">
                                status
                            </th>
                            <th scope="col" className="border-0">
                                campaigns
                            </th>
                            <th scope="col" className="border-0">
                                last contacted
                            </th>
                            <th scope="col" className="border-0">
                                emails
                            </th>
                            <th scope="col" className="border-0">
                                replies received
                            </th>
                            <th scope="col" className="border-0">
                                first
                            </th>
                            <th scope="col" className="border-0">
                                last
                            </th>
                            <th scope="col" className="border-0">
                                company
                            </th>
                            <th scope="col" className="border-0">
                                phone
                            </th>
                            <th scope="col" className="border-0">
                                title
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.prospects.map((i,index) => (
                            <>
                            <tr>
                                <td>{index+1}</td>
                                <td><Link to={`/campaign/${i._id}`}>{i.email}</Link></td>
                                <td>{i.status}</td>
                                <td>2</td>
                                <td>2021-04-07</td>
                                <td>2</td>
                                <td>3</td>
                                <td>{i.firstName}</td>
                                <td>{i.lastName}</td>
                                <td>{i.company}</td>
                                <td>{i.phone}</td>
                                <td>{i.title}</td>
                            </tr>
                            </>
                        ))}
                    </tbody>
                    
                    {/* <tbody>
                            <tr>
                                <td>1</td>
                                <td>firozahmad1788@gmail.com</td>
                                <td>M.F. Khan</td>
                                <td>2</td>
                                <td>2021-04-04</td>
                                <td>8</td>
                                <td>5</td>
                            </tr>
                    </tbody> */}

                </table>


            </div>
            </div>
        )
    }

}

export default Prospect;