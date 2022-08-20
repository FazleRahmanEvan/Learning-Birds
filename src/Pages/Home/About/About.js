import React from 'react';
import Card from 'react-bootstrap/Card';
import image from '../../../images/Education.jpg'


const About = () => {
    return (
        <div id="about">
       

    <Card className="bg-dark text-white w-50 mx-auto mb-5 mt-4">
      <Card.Img src={image} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>About Us</Card.Title>
        <Card.Text>
        Education develops critical thinking. This is vital in teaching a person how to use logic when making decisions and interacting with people (e.g., boosting creativity, enhancing time management). Education helps an individual meet basic job qualifications and makes them more likely to secure better jobs.It helps people become better citizens, get a better-paid job, shows the difference between good and bad. Education shows us the importance of hard work and, at the same time, helps us grow and develop. Thus, we are able to shape a better society to live in by knowing and respecting rights, laws, and regulations.Education certainly determines the quality of an individual's life. Education improves one's knowledge, skills and develops the personality and attitude. Most noteworthy, Education affects the chances of employment for people. A highly educated individual is probably very likely to get a good job.
        </Card.Text>
        
      </Card.ImgOverlay>
    </Card>


        </div>
    );
};

export default About;