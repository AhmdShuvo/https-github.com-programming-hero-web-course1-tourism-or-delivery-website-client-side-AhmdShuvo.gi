import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Orderss from './Orderss';

const ManageDelete = () => {

    const {user}=useAuth()
    const [services,setservices]=useState([])

    useEffect(()=>{
        fetch(`https://pacific-falls-94383.herokuapp.com/orders`).then(res=>res.json()).then(data=>{

       setservices(data)
        })
    },[])
    return (
        <div>
            <h1>manage delete</h1>
            <div>
                {
                    services.map(service=><Orderss
                    key={service._id}
                    service={service}
                    ></Orderss>)

 


                }


            </div>
                
        </div>
    );
};

export default ManageDelete;