import './SignUp.css'
import image from './image1.png'
import studentImage from './image2.png'
import passwordImage from './password.png'
import building from './building.png'
import emailImage from './email.png'
import mobileImage from './mobileNumber.png'

import React, {useEffect, useState} from 'react'

function SignUp(){
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [checkTerms, setTerms] = useState(false);

    const saveToLocalstorage = () => {

        // CHECKING THE CONDITIONS IF THE INPUT FIELD IS EMPTY
        if(companyName === '' || email === '' || password === '' || mobileNumber === ''){
            alert("Please fill all the details !");
            return;
        }

        // CHECKING THE CHECKBOX OF TERMS AND CONDITIONS
        if(!checkTerms){
            alert("Accept the terms and conditions !");
            return;
        }

        // CREATING OBJECT TO STORE ALL THE DETAILS AND TO SAVE IN THE LOCALSTORAGE
        const userDetails = {
            email,
            companyName,
            password,
            mobileNumber
        }        

        localStorage.setItem(email,JSON.stringify(userDetails));
        alert("Sign up successfully");

        setCompanyName('');
        setEmail('');
        setMobileNumber('');
        setPassword('');
        setTerms(false);


    }

    return(
            <div id="main-coantainer">
                {/* FORM PAGE */}
                <div id="form-div">
                    <h1>Sign up</h1>
                    <form>
                        {/* INPUT FOR COMPANY NAME */}
                        <input
                            type="text" 
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="Company name"
                            name="companyName"
                            className='input-field'/>

                        <br></br>

                        {/* INPUT FOR EMAIL */}
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email address"
                            name="email"
                            className='input-field'
                        />
                            
                        <br></br>

                        {/* PASSWORD */}
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            name="password"
                            className='input-field'
                        />
                        <br></br>

                        {/* MOBILE NUMBER */}
                        <input
                            type="number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            placeholder="+91 Mobile number"
                            name="mobile"
                            className='input-field'
                        />
                        <br></br>

                        {/* COUNTRY */}
                        <select>
                            <option value="Country">Country</option>
                            <option value="India">India</option>
                            <option value="Japan">Japan</option>
                        </select>
                        
                        {/* STATE */}
                        <select>
                            <option value="State">State</option>
                            <option value="Jharkhand">Jharkhand</option>
                        </select>
                    </form>
    
                    <p id='text'>Your data will be in INDIA data center.</p>
    
                    <input
                        type="checkbox"
                        id='terms'
                        checked={checkTerms}
                        onChange={(e) => setTerms(e.target.checked)}
                    />
                    
                    <p id='termsText'>I agree to the Terms of service and Privacy Policy.</p>
    
                    <button onClick={saveToLocalstorage}>CREATE ACCOUNT</button>
                </div>
    
                <div id="vertical-line"></div>
    
                <div id="image-side-container">
                    <img src={image} alt='image' id='three-person' />
                    <img src={studentImage} alt='image' id='studentImage' />
                </div> 

                {/* IMAGES OF THE INPUT FIELD */}
                <div>
                    <img src={mobileImage} id='mobileImage' />
                    <img src={building} id='building' />
                    <img src={passwordImage} id='passwordImage' />
                    <img src={emailImage} id='emailImage' />
                </div>
            </div>
        )
}




export default SignUp;