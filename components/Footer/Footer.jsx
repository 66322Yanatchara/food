import React from "react"
import './Footer.css'

const Footer = () => {
    return(
        <div className='footer' id='footer'>
          <div className="footer-content">
            <div className="footer-content-left">
               <img src={assrts.logo} alt=" " />   
               <p>ข้อความนะจ๊ะ</p>    
               <div className="footer-social-icons">
                    <img src={assts.facebook_icon} alt="" />
                    <img src={assts.twitter_icon} alt="" />
                    <img src={assts.linkedin_icon} alt="" />
                </div>        
            </div>
            <div className="foter-content-conter"> 
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>   
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                 <h2>GET IN TOUCH</h2>
                 <ul>
                    <li>0900808090</li>
                    <li>contact@tomato.com</li>
                 </ul>
            </div>
          </div>
          <hr />
          <p className="foot-cpyright">Copyright 2024 @Tomato.com -All Right Reserved.</p>
        </div>
    )
}
export default Footer 