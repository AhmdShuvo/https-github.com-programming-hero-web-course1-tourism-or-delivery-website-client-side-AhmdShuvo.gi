import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import "./Home.css"
import Place from './Place';

const Home = () => {

    const [places,setplaces]=useState([])

    useEffect(()=>{
  fetch("https://pacific-falls-94383.herokuapp.com/places").then(res=>res.json()).then(data=>{

  setplaces(data.slice(0,6))
  })
    },[])
    return (
        <>
        <section className=" d-lg-flex justify-content-evenly align-items-center mb-5">
        <div className="header-container">
  <img className="img-fluid" src="./images/header-image.jpg" alt="Snow"/>
  <div className="centered"><h1>Tourism models: the differential key to economic success</h1></div>
</div>
        </section>

        <section className="container my-5">

            <h3 className="my-4">places to visit </h3>

            <Row xs={1} md={2} className="g-4">
                {

                    places.map(place=><Place
                    key={place._id}
                    place={place}
                    ></Place>)
                }

            </Row>
        </section>
            
        </>
    );
};

export default Home;