import React from 'react';
// import { Card, Col } from 'react-bootstrap';
import './Popular.css'
const Popular = (props) => {
    const {name, trainer, vid} = props.dance;
    return (
        
            
            <div className="card-container m-4">

            <div className="video-container mb-2">
            <iframe 
            width="500" height="400" 
            style={{borderTopLeftRadius:'10px', borderTopRightRadius:'10px'}} 
            src={vid}
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
            </div>
            <div className="text-container">
                <p><strong>Dance Style: {name}</strong> </p>
                <p><strong>Dance Master: {trainer}</strong></p>
            </div>
            
            </div>
        
        
    );
};

export default Popular;