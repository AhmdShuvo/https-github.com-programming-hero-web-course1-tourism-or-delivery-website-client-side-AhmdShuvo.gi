import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import "./Place.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'

const Place = ({place}) => {
  const CartIcon = <FontAwesomeIcon icon={faCartPlus} />
    const {name,Country,about,company,cost,picture,_id}=place;
    const history=useHistory()
    const url=`/place/${_id}`


    const handlewhiteList=()=>{

        history.push(url)
    }
  
    return (
        <div >
            <Col >
      <Card className="shadow-lg p-3 mb-5 rounded bg-dark text-light card">
        <Card.Img className="p-2 img-fluid border border-info " variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <h4 className="text-info p-2"> Country :{Country}</h4>
          <Card.Text>
           {about} 
          
          </Card.Text>
          <div className="border border-2 p-3 text-warning">

              <h5>A Tour By : {company}</h5>
              <h4>Cost :$ {cost}</h4>
              <button onClick={handlewhiteList} className="btn-warning p-2 text-light fs-4 "> Add to whiteList   {CartIcon}</button>

          </div>
       
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Place;