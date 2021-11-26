import React from 'react';
import { Carousel, Row} from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import './Home.css';
import Popular from '../Popular/Popular';
const Home = () => {
    const [popular, setPopular] = useState([]);

    useEffect(()=>{
        fetch('./popular.JSON')
        .then(resp=> resp.json())
        .then(data => setPopular(data));
    },[])
    return (
        <div className="mt-4">
            <section>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block carousels-img"
                        src="https://i.ibb.co/wRy90fD/first.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block carousels-img"
                        src="https://i.ibb.co/yPp28Zm/second.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block carousels-img"
                        src="https://i.ibb.co/4TSGSC3/third.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <section>
            <h3 className="home-page-text">Our Most Popular Dance Forms</h3>
            <div className="popular-container">
                
                {
                  popular.map(dance => <Popular
                    key={dance.id}
                    dance = {dance}
                ></Popular>)
                }
             
                </div>
            </section>
            <section>
            <div className="box-container">
                    <div id="box-1" className=" box">
                        <p>Why Choose Us?</p>
                        <img className="img-fluid" src="https://i.ibb.co/Cv9jynd/thinking.jpg" alt="" />
                        </div>
                    <div id="box-2" className=" ps-5 mt-3 box">
                        <ul>
                            <li className="ps-3">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            
                            </li>
                            <li className="ps-3">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer  took a galley of type and scrambled it to make a type specimen book. took a galley of type and scrambled it to make a type specimen book.</p>
                            
                            </li>
                        </ul>
                    </div>

            </div>
            </section>
        </div>
        
    );
};

export default Home;