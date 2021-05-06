import React, { Component} from "react";
import {Nav, Navbar,NavbarBrand,NavItem,NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
// import {NavLink as RouteNavLink} from "react-router-dom";
// import classNames from "classnames";
import { BsCursorFill,BsEnvelopeFill,BsFillPersonFill,BsFileEarmarkText,BsPlusSquareFill,BsBarChartFill} from "react-icons/bs";


class NavSection extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        // const classes= classNames(
        //     "main-sidebar",
        //     "px-0",
        //     "col-12",
        //     this.state.menuVisible && "open"
        // );
        return (
          <div class="container">
            <div
                style={{color:"white",backgroundColor:"black"}}
                //class="col-sm-2"
                class="col-2 col-md-2 left"
                tag="aside"
                
                // className="classes"
                lg={{size:2}}
                md={{size:3}}
        
            >
            <Navbar
                className="align-items-stretch flex-md-nowrap border-bottom p-0"
            >
                <NavbarBrand
                    className="w-100 mr-0"
                    href="#"
                    style={{ lineHeight: "25px" }}
                >
            <div className="d-table m-auto" style={{color:"white"}}>
            
                <span className="d-none d-md-inline ml-1">
                 <strong> TrackIO </strong> 
                </span>
            </div>
                </NavbarBrand>
            </Navbar>
            <div className="nav-wrapper" >
                <Nav className="nav--no-borders flex-column">
                    <NavItem>
                    <Link to="/app/prospects">
                        <NavLink>
                        <BsFillPersonFill
                                style={{
                                fontSize: "30px",
                                marginLeft: "15px",
                                cursor: "pointer",
                                color:"white"
                            }}/> 
                            <div className="d-inline-block item-icon-wrapper" style={{color:"white"}}>
                                <span> Prospects </span>
                            </div>

                        </NavLink>
                    </Link>
                    </NavItem>

                    <NavItem>
                    <Link to="/app/dashboard">
                        <NavLink>
                            <BsCursorFill
                                style={{
                                fontSize: "30px",
                                marginLeft: "15px",
                                cursor: "pointer",
                                color:"white"
                            }}/> 
                            <div className="d-inline-block item-icon-wrapper" style={{color:"white"}}>
                                <span> Campaigns </span>
                            </div>

                        </NavLink>
                        </Link>
                    </NavItem>


                    <NavItem>
                    <Link to="/app/templates">
                        <NavLink to="/sign_up">
                        <BsFileEarmarkText
                                style={{
                                fontSize: "30px",
                                marginLeft: "15px",
                                cursor: "pointer",
                                color:"white"
                            }}/> 
                            <div className="d-inline-block item-icon-wrapper" style={{color:"white"}}>
                                <span> Templates </span>
                            </div>

                        </NavLink>
                    </Link>
                    </NavItem>


                    <NavItem>
                    <Link to="/app/reporting">
                        <NavLink>
                        <BsBarChartFill
                                style={{
                                fontSize: "30px",
                                marginLeft: "15px",
                                cursor: "pointer",
                                color:"white"
                            }}/>
                            <div className="d-inline-block item-icon-wrapper" style={{color:"white"}}>
                                <span> Reporting </span>
                            </div>

                        </NavLink>
                    </Link>
                    </NavItem>


                    <NavItem>
                    <Link to="/app/outbox">
                        <NavLink>
                        <BsEnvelopeFill
                                style={{
                                fontSize: "30px",
                                marginLeft: "15px",
                                cursor: "pointer",
                                color:"white"
                            }}/> 
                            <div className="d-inline-block item-icon-wrapper" style={{color:"white"}}>
                                <span> Outbox </span>
                            </div>

                        </NavLink>
                    </Link>
                    </NavItem>
                    <NavItem>
                    <Link to="/app/resources" target="_blank" rel="noopener noreferrer">
                        <NavLink>
                        <BsPlusSquareFill
                                style={{
                                fontSize: "30px",
                                marginLeft: "15px",
                                cursor: "pointer",
                                color: "white"
                            }}/>
                            <div className="d-inline-block item-icon-wrapper" style={{color:"white"}}>
                                <span> Resources </span>
                            </div>

                        </NavLink>
                        </Link>
                    </NavItem>



                </Nav>
            </div>
            </div>

            {/* <div class="col-10 right" >
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
                        <tr scope="col" className="border-0">
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

            </div> */}

        </div> 

        )
    }
}
export default NavSection;