import React from 'react';


import teacher1 from '../../images/english-teacher.jpg';
import teacher2 from '../../images/math teacher.jpg';
import teacher3 from '../../images/physics teacher.jpg';


import Teacher from '../Home/Teacher/Teacher';

const teachers = [
    {id: 1, name: 'Will Smith', img: teacher1},
    {id: 2, name: 'Chris Rock', img: teacher2},
    {id: 3, name: 'Dwayne Rock', img: teacher3},
]

const Teachers = () => {
    return (
        <div id="teachers" className='container'>
            <h2 className='text-dark text-center mt-5'>Our Teachers</h2>
            <div className="row">
                {
                    teachers.map(teacher => <Teacher
                        key={teacher.id}
                        teacher= {teacher}
                    ></Teacher>)
                }
            </div>
        </div>
    );
};

export default Teachers;