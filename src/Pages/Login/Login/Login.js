import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
     signInWithEmailAndPassword,user,loading] = useSignInWithEmailAndPassword(auth);

     const [sendPasswordResetEmail,sending ] = useSendPasswordResetEmail(auth);

     if(loading || sending){
        return<Loading></Loading>
     }
      if(user){
          navigate(from, {replace:true});
      }

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email,password)
        
    }

    const navigateRegister =event =>{
        navigate('/register')

    }
    const resetPassword = async() =>{
        const email = emailRef.current.value;
       if (email){
        await sendPasswordResetEmail(email);
        toast('Sent email');
       }
       else{
           toast('plese enter your email')
       }
    }

    return (
        <div className='container w-25 mx-auto mb-5'>
            <h3 className='text-primary mb-4'>Please Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                   
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email " required/>
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                   
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary mt-3" type="submit">
                   Login
                </Button>
            </Form>
            <p>New To Learning Birds? <Link to="/register" className='text-primary pe-auto text-decoration-none ' onClick={navigateRegister}>Please Register</Link></p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none ' onClick={resetPassword}>Reset Password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer/>
        </div>
    );
};

export default Login;