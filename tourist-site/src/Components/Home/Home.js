import React, { useEffect, useState } from 'react';
import { Carousel, Row, Spinner } from 'react-bootstrap';
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
               

              
              


           {/* Banner / */}
              {places?
       <div>
       <section className=" d-lg-flex justify-content-evenly align-items-center mb-5">
        <div className="header-container">
           <img className="img-fluid" src="./images/header-image.jpg" alt="map"/>
  <div className="centered"><h1>Tourism models: the differential key to economic success</h1></div>
</div>


          {/* Extra section // */}
        </section>

        <article className="container my-5 d-md-flex align-items-center bg-info text-light p-3 ">

<div className="mx-3"> 
    <img className="img-fluid border rounded-3" src="./images/015-Cute-Map-of-Seattle.jpg" alt="" />
</div>

            <div>
             <h1>visite Places Arround the world With Travel Guid </h1>
              </div>

              </article>


     <div className="container">

         <h4 className="fs-3 text-success m-2">Our Efficiency</h4>
     <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.shutterstock.com/image-illustration/air-travelling-concept-passport-boarding-260nw-1154346064.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://resources.workable.com/wp-content/uploads/2013/07/travel-agent-640x230.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
     </div>



              {/* //Some places to visit */}

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
       </div>:<center><Spinner className="text-danger fs-1" animation="grow" /></center>}
      
        
            
        </>
    );
};

export default Home;