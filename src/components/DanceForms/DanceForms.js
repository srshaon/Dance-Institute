import React from 'react';
import { Row} from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import './DanceForms.css'
import Dance from '../Dance/Dance'
const DanceForms = () => {
    const [dances, setDances] = useState([]);

    useEffect(()=>{
        fetch('./dance.JSON')
        .then(resp=> resp.json())
        .then(data => setDances(data));
    },[])

    

    return (
        <div>
            {
                <Row xs={1} md={3} className="g-2">
                {
                  dances.map(dance => <Dance
                    key={dance.id}
                    dance = {dance}
                ></Dance>)
                }
              </Row>
                
            }
            
        </div>
    );
};

export default DanceForms;