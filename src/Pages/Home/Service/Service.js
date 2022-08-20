
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id,name, img,description,price} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }

    return (
    

<div className='g-5 col-sm-12 col-md-6 col-lg-6'>
<div className="card" style={{ width: "18rem" }}>
<img src={img} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
          <p class="card-text">Price:{price}</p>
       <button onClick={() =>navigateToServiceDetail(id)} className='btn btn-primary'>Book Now</button>
        </div>
</div>
</div>
    )
};

export default Service;