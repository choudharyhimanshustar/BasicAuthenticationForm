import { useState } from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
    const [fname, setfName] = useState();
    const [lname, setlName] = useState();
    const [em, setEmail] = useState();
    const [pw1, setPw1] = useState();
    const [pw2, setPw2] = useState();
    const navigate=useNavigate();
    function handleSignUp() {
        if (pw1 !== pw2)
        {
            alert("Password don't match");
            return;
        }
            
        if (!fname)
            alert("First Name is Required");
        if (!lname)
            alert("Last Name is Required");
        if (!em)
            alert("Email is Required");
        const updateUser = {
            firstname: fname,
            lastname: lname,
            email: em,
            password: pw1
        }
        const existingInfo = JSON.parse(localStorage.getItem('item')) || [];
        const updateInfo = [...existingInfo, updateUser];
        localStorage.setItem('item', JSON.stringify(updateInfo));
        navigate('/');
    }
    return (<div className='SignUpCSS'>
        <h1>Sign Up</h1>
        <form className="SignUpInputCSS">
            <input type="text" value={fname} placeholder="First Name" onChange={(e) => setfName(e.target.value)} />
            <input type="text" value={lname} placeholder="Last Name" onChange={(e) => setlName(e.target.value)} />
            <input type="email" value={em} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={pw1} placeholder="Password" onChange={(e) => setPw1(e.target.value)} />
            <input type="password" value={pw2} placeholder="Confirm Password" onChange={(e) => setPw2(e.target.value)} />
            <button onClick={() => handleSignUp()}>Sign Up</button>
        </form>
    </div>)
}