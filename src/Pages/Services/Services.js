import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';

import './Services.css';

const Services = () => {
    const [services, setServices] = useState ([]);
    useEffect( ()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
       

<div id="services" className='container '>
<h2 className='text-dark text-center mt-5'>Courses</h2>
<div className="row mx-5 ">
{
                services.map(service => <Service
                key={service.id}
                service={service}
                >

                </Service>)
            }
</div>
</div>
    );
};

export default Services;