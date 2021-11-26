import React from 'react';
import './Famous.css'
const Famous = (props) => {
    const {name, insta, img} = props.dancer;
    return (
        <div className="famous">
            <div className="famous-image">
            <img  src={img} alt="" />
            </div>

            <div className="famous-details ">
            
            <h4>Name: {name}</h4>
            <h4 >Get Connected:  
            <a style={{paddingLeft:'20px'}} rel="noopener noreferrer" href={insta} target="_blank">
                    <img className="icons" src="https://i.ibb.co/9ZS26Lr/Instagram.png" alt="" /></a>    
            </h4>            
            </div>
            
        </div>
    );
};

export default Famous;