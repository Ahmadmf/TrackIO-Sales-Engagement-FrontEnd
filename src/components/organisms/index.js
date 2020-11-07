import React,{Component} from "react";
import {Nav, Navbar,NavbarBrand,NavLink} from 'reactstrap';
class Navsection extends Component{
    constructor(props){
        super(props);
        this.state={};
        
    }
    render(){
        return(
            <div classname="container">
                <Navbar dark color="dark">
                    <NavbarBrand href="/">TrackIO</NavbarBrand>
                    <Nav className="mr-auto">
                    <NavLink href="/home">Home</NavLink>
                    <NavLink href="features">Features</NavLink>
                    <NavLink href="Pricing">Pricing</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink href="/sign_up">Sign Up</NavLink>
                        <NavLink href="/logIn">Login</NavLink>
                    </Nav>
                </Navbar>
            </div>

    

        )

    }
}
export default  Navsection;