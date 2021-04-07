import React from "react";
import "./style.css";
import { FaFacebookF} from "react-icons/fa";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
export default function footer(){
    // const scrollTop=()=>{
    //     window.scrollTo({top:0,behavior:'smooth'});
    // };
    return(
        < >
        {/* <div class="footer-align">
        <div className="footer-backtotop text-center">
          <FaGreaterThan
            className="top-icon"
            style={{
              color: "white",
              transform: "rotate(-90deg)",
              fontSize: "10px",
              margin: "0",
              padding: "0",
              marginBottom: "15px",
              cursor:"pointer"
            }}
            onClick={scrollTop}
          />
        <p
          style={{
            color: "white",
            textAlign: "center",
            margin: "0",
            padding: "0",
            marginTop: "-15px",
          }}
        >
          BACK TO TOP
        </p>
      </div>
      </div> */}

        <div className="footer">
            <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="social-icons">
            <img
              className='footer-logo'
              src=""
              alt="logo"
              />
              <div className='footer-icons-div'>
                <p className='contact-us-footer'>
              <b>Connect with TrackIO</b>
              </p>
              <div className='footer-icons'>
            <AiOutlineInstagram
              style={{ fontSize: "30px", cursor: "pointer" }}
            />
            <FaFacebookF
              style={{
                fontSize: "30px",
                marginLeft: "15px",
                cursor: "pointer",
              }}
            />
            <AiFillLinkedin
              style={{
                fontSize: "30px",
                marginLeft: "15px",
                cursor: "pointer",
              }}
            />
            </div>
            </div>
          </div>
          <div
            className="footer-info"
          >
            <ul className="footer-ui">
              <li className='footer-ui-1'>About</li>
                <li>Pricing</li>
                <li>20% Referral</li>
                <li>Project</li>
            </ul>
            <ul className="footer-ui">
              <li className='footer-ui-1'>Customers</li>
                <li>Small Bussinees</li>
                <li>Startup</li>
                <li>Student</li>
                <li>YC</li>
            </ul>
          </div>
          <div className='contact-us-div'>
            <p>
              Contact Us:-
              <span style={{ color: "white" }}>+91000000000000</span>
            </p>
          </div>

            </div>

        </div>
        {/* <div className="footer">
            <div className="empty-contianer">
                <div className="container">
                    <a href="/">Privacy Policy</a>
            </div>
        </div> */}
    
        {/* <div className="footer">
        <div className="empty-contianer">
                <div className="container">
                    <a href="/">Privacy Policy</a>
            </div>              
        </div> 
        </div> */}
        </>

    )

}