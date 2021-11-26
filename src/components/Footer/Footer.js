import React from 'react';
import './Footer.css'
const Footer = () => {
    const clearInpotField = () =>{
        const input = document.getElementById('input-field');
        input.value = '';
    }
    return (
        <div className="footer-section">
            <div className="footer-first-parts d-flex flex-column ps-3">
                <div className="socialicons-text ps-3 pb-2">
                    <h3>We Share Here <i className="fas fa-bell"></i></h3>
                </div>
                <div className="socialicons ps-3">
                
                    <a rel="noopener noreferrer" href="https://www.instagram.com" target="_blank">
                        <img className="icon-image" src="https://i.ibb.co/9ZS26Lr/Instagram.png" alt="" /></a>

                    <a rel="noopener noreferrer" href="https://dribbble.com/" target="_blank">
                        <img alt="" className="icon-image" src="https://i.ibb.co/qg1Cbbn/Dribbble.png" /></a>

                    <a rel="noopener noreferrer" href="https://twitter.com/" target="_blank">
                        <img alt="" className="icon-image" src="https://i.ibb.co/c84K07f/Twitter.png" /></a>

                    <a rel="noopener noreferrer" href="https://www.youtube.com/" target="_blank">
                        <img className="icon-image" alt="" src="https://i.ibb.co/s5NJsWg/Youtube.png" /></a>
            </div>
            </div>
            <div className="footer-second-part-container ">
                <div>

                </div>
                <div className="footer-second-parts">
                    <div >
                        <h4 className="mid-part">
                        Get Updates On Workshops, Tutorials And More  
                        </h4>
                    
                    </div>
                    
                    <div className="last-part d-flex flex-column mx-5"> 
                        <div >
                            <h6 className="subscribe-part">
                            Subscribe To Our Newsletter
                            </h6>
                        </div>               
                        <div className="email-part">
                            <input id="input-field" className="email-box form-label text-center" type="text" name="email" placeholder="Enter Your Email"/>
                        </div>
                        <div className="btn-part">
                            <button onClick={clearInpotField} id="submit-btn" className="submit-btn btn btn-warning"><strong>Submit</strong></button>
                        </div>
                        
                    
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className="footer-third-parts me-1">
                <div className="d-flex ps-4">
                    <h3 className='mt-1 pe-4'>We Play Here</h3>
                    <img style={{width:'40px' , height:'40px'}} src="https://i.ibb.co/WkZw38z/dancing-1.png" alt="" />
                </div>
                <div className='ps-4'>
                    <h6>Flat No: 1B, House No: 76,</h6>
                    <h6>Section No: 7, Mirpur DOHS,</h6>
                    <h6>Dhaka, Bangladesh.</h6>
                </div>
            </div>
        </div>
    );
};

export default Footer;