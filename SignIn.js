import './SignIn.css'
import image from './image1.png'
import studentImage from './image2.png'


import {useState} from 'react'


export default function SignIn(){

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedDetails = JSON.parse(localStorage.getItem('email'));

        if(email === '' || password === ''){
            alert("Please fill all the details");
            return;
        }

        if(storedDetails.email === email && storedDetails.password === password){
            alert("Sign in successful");

        }else{
            alert("Email and password don't match");
        }
    }

    return(
        <div id='signInContainer'>
            <div id='formDiv'>
                <h1 id='firstText'>ZedSync</h1>

                <form>
                    <h1>Sign in</h1>
                    <label for="email"><b>Email</b></label><br></br>

                    <input 
                    type='email' 
                    name='email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Your email address...' 
                    className='signInInput'/><br></br><br></br>

                    <label for="password"><b>Password</b></label><br></br>
                    <input 
                    type='password' 
                    name='password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Your password...' 
                    className='signInInput'/><br></br>
                </form>
                <p id='forgotText'>Forgot your password?</p>
                <button type='submit' onClick={handleSubmit} id='logInBtn'><b>Log in</b></button>
            </div>

            <div id="vertical-line"></div>

            <div id="image-side-container">
                <img src={image} alt='image' id='three-person' />
                <img src={studentImage} alt='image' id='studentImage' />
            </div> 

        </div>
    )
}