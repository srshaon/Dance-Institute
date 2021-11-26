import React, { useEffect, useState } from 'react';
import Famous from '../Famous/Famous';
import './HallOfFame.css'
const HallOfFame = () => {
    const [fames, setFames] = useState([]);

    useEffect(()=>{
        fetch('./fame.JSON')
        .then(resp=> resp.json())
        .then(data => setFames(data));
    },[])
    return (
        <div className="hall-of-fame-container">
            <h4 className="text-center mt-3 fame-text">Meet All Your Inspirations In One Place</h4>
            <div className="famous-container">
            {
                fames.map(dancer => <Famous
                    key={dancer.id}
                    dancer = {dancer}
                ></Famous>)
            }
            </div>
            
            <h4 className="text-center mt-3 fame-text">And Many More To Come...</h4>
        </div>
    );
};

export default HallOfFame;