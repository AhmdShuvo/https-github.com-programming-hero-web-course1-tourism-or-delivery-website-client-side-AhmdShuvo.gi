import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import {  useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Details = () => {

  const {user}=useAuth()
    const {placeId}=useParams()

    const [places,setPlace]=useState({});

    const [adress,setadress]=useState('')

    const [number,setnumber]=useState('')
 
    useEffect(()=>{

        fetch('https://pacific-falls-94383.herokuapp.com/places').then(res=>res.json()).then(data=>{

        const match=data.find(plc=>plc._id==placeId)
        setPlace(match);
        })

    },[placeId])



    const getaddress=e=>{

          setadress(e.target.value)
    }

    const getNumber=e=>{

      setnumber(e.target.value);
      
    }

  

    const handleConfirm=e=>{
              

      const confirm=  window.confirm('are you sure')
    if(confirm){

     let order=places


     let userdata={Name:`${user.displayName}`,Email:`${user.email}`,Phone:`${number}`,Adress:`${adress}`,status:"pending"}

     userdata.whitelist=order

     fetch('https://pacific-falls-94383.herokuapp.com/orders',{
       method:'POST',
       headers:{ "content-type": 'application/json'},
              body:JSON.stringify(userdata)

     })

     alert(" your Order Recieved")
    }
     
   
     e.preventDefault()
   }




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
 <form onSubmit={handleConfirm} className="my-5">
 <div>
 <input onChange={getaddress} className="form-control" type="text" placeholder="Type Your Address" required/>
 <input onChange={getNumber} className="form-control" type="number" placeholder="Phone Number" required/>
 </div>
  <center><button type="submit" className="btn-warning text-light p-3">Confirm WhiteList</button></center>
 </form>

  </section>
    

        </>
    );
};

export default Details;