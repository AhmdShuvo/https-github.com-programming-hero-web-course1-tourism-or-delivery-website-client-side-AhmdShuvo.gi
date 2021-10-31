import React from 'react';

const Event = ({event}) => {

    const {picture,name,about}=event
    return (
        <div>
        <div className=" container d-lg-flex align-items-center border border-info p-3 m-2 rounded-3 ">
                <div>

                    <img className="m-2" src={picture} alt="" />
                </div>
                <div className="m-3">
                    <h4>{name}</h4>
                    <p>{about}</p>
                </div>

            </div>
        </div>
    );
};

export default Event;