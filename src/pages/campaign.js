import React,{Component} from 'react';
import "./campaign.css";
import NavSection from "../components/organisms/organisms/nav-section";
import { BsFillPlusSquareFill,BsFillEnvelopeFill,BsLightning } from "react-icons/bs";
import {Nav, Navbar, NavLink} from 'reactstrap';
class Campaign extends Component{
    // constructor(props){
    //     super(props);
    // }
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
                        <NavLink>
                            <BsFillPlusSquareFill
                                style={{
                                fontSize: "20px",
                                marginLeft: "15px",
                                cursor: "pointer",
                            }}/>  New Campaign</NavLink>
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
                        <tr>
                            <td>1</td>
                            <td> Campaign 1</td>
                            <td> March 1, 2021</td>
                            <td>3</td>
                            <td>35</td>
                            <td>34</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td> Campaign 2</td>
                            <td> July 5, 2021</td>
                            <td>03</td>
                            <td>5</td>
                            <td>14</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td> Campaign 3</td>
                            <td> Jan 3, 2021</td>
                            <td>11</td>
                            <td>389</td>
                            <td>98</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td> Campaign 4</td>
                            <td> Dec 6, 2021</td>
                            <td>43</td>
                            <td>325</td>
                            <td>14</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td> Campaign 5</td>
                            <td> Feb 1, 2021</td>
                            <td>45</td>
                            <td>25</td>
                            <td>314</td>
                            <td>40</td>
                        </tr>
                    </tbody>

                </table>

            </div>



            </div>
        )
    }

}

export default Campaign;