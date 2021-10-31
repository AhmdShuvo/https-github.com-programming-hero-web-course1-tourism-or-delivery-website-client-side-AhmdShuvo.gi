
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload} from '@fortawesome/free-solid-svg-icons'

const Upload = () => {
    const element = <FontAwesomeIcon icon={faUpload} />

    const [name,setname]=useState('')
    const [photo,setphoto]=useState('')
    const [company,setcompany]=useState('')
    const [cost,setcost]=useState('')
    const [email,setemail]=useState('')
    const [phone,setphone]=useState('')
    const [Country,setcountry]=useState('')
    const [about,setabout]=useState('')



    const getname=e=>{

        setname(e.target.value)
    }
    const getphoto=e=>{

        setphoto(e.target.value)
    }
    const getcompany=e=>{

        setcompany(e.target.value)
    }
    const getcost=e=>{

        setcost(e.target.value)
    }
    const getemail=e=>{

        setemail(e.target.value)
    }
    const getphone=e=>{

        setphone(e.target.value)
    }
    const getcountry=e=>{

        setcountry(e.target.value)
    }
    const getabut=e=>{

        setabout(e.target.value)
    }

    const handleUpload=e=>{

        const data={name:`${name}`,picture:`${photo}`,company:`${company}`,cost:`${cost}`,email:`${email}`,phone:`${phone}`,Country:`${Country}`,about:`${about}`}
              fetch("https://pacific-falls-94383.herokuapp.com/places",{
        
             method:"POST",headers:{"content-type":'application/json'},
             body:JSON.stringify(data)
        
             })
        
        
        

             e.preventDefault()
        
            }



    return (
        <div>
            
            <form className="container" onSubmit={handleUpload} >

      <h4>Name:<input onChange={getname} className="form-control my-2" type="text" placeholder="name" required /></h4>
            <h4>picture URL:<input onChange={getphoto} className="form-control my-2" type="text" placeholder="Photo URL" /></h4>
            <h4>cost : <input onChange={getcost} className="form-control my-2" type="number" placeholder="Cost" required  /></h4>
            <h4>company : <input onChange={getcompany} className="form-control my-2" type="text" placeholder="Company" required  /></h4>
            <h4>emai : <input onChange={getemail} className="form-control my-2" type="email" placeholder="Email" required  /></h4>
            <h4>phone: <input onChange={getphone} className="form-control my-2" type="number" placeholder="Phone" required  /></h4>
            <h4>Country : <input onChange={getcountry} className="form-control my-2" type="text" placeholder="Country" required  /></h4>
            <h4>about : <input onChange={getabut} className="form-control my-2" type="text" placeholder="About"  required /></h4>
           
          

            <button className="btn-warning text-light p-3 border rounded-3 fs-4" type="submit">upload  {element} </button>
          </form>
        </div>
    );
};

export default Upload;
