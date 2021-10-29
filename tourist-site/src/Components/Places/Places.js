import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Place from '../Home/Place';

const Places = () => {

    const [places,setplaces]=useState([])


    useEffect(()=>{

        fetch("https://pacific-falls-94383.herokuapp.com/places").then(res=>res.json()).then(data=>{
            setplaces(data)
        })

    },[])
    return (
        <>
        <section className="container my-5">

            <h3 className="my-4">places to visit </h3>

            <Row xs={1} md={3} className="g-4">
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

export default Places;