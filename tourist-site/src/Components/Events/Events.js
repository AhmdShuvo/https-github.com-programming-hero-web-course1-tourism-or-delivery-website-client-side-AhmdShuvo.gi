import React, { useEffect, useState } from 'react';
import Event from './Event';

const Events = () => {

    const [events,setEvents]=useState([])

    useEffect(()=>{
        fetch("https://pacific-falls-94383.herokuapp.com/places").then(res=>res.json()).then(data=>setEvents(data.slice(6,9)));
 
    },[])
    return (
        <div className="my-5">
            <article className="">
                <div className="container d-lg-flex align-items-center ">
                   <div>
                   <img className="img-fluid" src="./images/Home-templet.png" alt="" />
                   </div>
                   <div><h1 className="m-3 text-success fs-1">We host more Leaders than Others...</h1></div>

                </div>

                <div className="my-5 container">
                    <h4>Upcoming Events</h4>

                    <div>
                        {
events.map(event=><Event 
key={event._id}
event={event}
></Event>)

                        }
                    </div>
                </div>
                



            </article>
        </div>
    );
};

export default Events;