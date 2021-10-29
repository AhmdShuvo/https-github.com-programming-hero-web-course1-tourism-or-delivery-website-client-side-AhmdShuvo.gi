import React, { useEffect, useState } from 'react';
import { Card, FloatingLabel, Form } from 'react-bootstrap';
import { useParams } from 'react-router';

const Details = () => {
    const {placeId}=useParams()
    console.log(placeId);

    const [places,setPlace]=useState({});
    console.log(places);
    


    useEffect(()=>{

        fetch('https://pacific-falls-94383.herokuapp.com/places').then(res=>res.json()).then(data=>{

        const match=data.find(plc=>plc._id==placeId)
        setPlace(match);
        })

    },[placeId])
    const {name,Country,about,company,cost,picture,email,phone}=places
          
                  
    return (
        <>
             <Card className="container my-5">
    <Card.Img className="img-fluid p-2 border rounded-3" variant="top" src={picture} />
    <Card.Body>
    <Card.Title>{name}</Card.Title>
    <h4 className="text-info p-2"> Country :{Country}</h4>
      <Card.Text>
       {about}
      </Card.Text>
      <div className="border border-info p-2 text info bg-dark text-light">

         <center> <h4>total cost:{cost} </h4>
          <h5>A Tour By : {company}</h5>
          <h5>Contact email : {email}</h5>
          <h5>Contact Phone: {phone}</h5>
          
          </center>

      </div>
    </Card.Body>
  </Card>

  <section className="container">
 <form className="my-5">
 <FloatingLabel
    controlId="floatingInput"
    label="Phone Number"
    className="mb-2"
  >
    <Form.Control type="number" placeholder="name@example.com" />
  </FloatingLabel>
  <FloatingLabel controlId="floatinginput" label="Your Address" className="mb-2">
    <Form.Control type="text" placeholder="Yout Address" />
  </FloatingLabel>
  <center><button className="btn-warning text-light p-3">Confirm WhiteList</button></center>
 </form>

  </section>
    

        </>
    );
};

export default Details;