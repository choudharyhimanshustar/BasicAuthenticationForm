import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
    const [em, setEmail] = useState();
    const [pw1, setPw1] = useState();
    const navigate=useNavigate();
    function handleSignIn()
    {
        const storedUser=JSON.parse(localStorage.getItem('item'))||[];
        const user=storedUser.find((user)=>user.email===em && user.password===pw1);
        if(user)
        {
            alert("Login Successfull");
            navigate('/home');
        }
        else
        {
            alert("Login Insuccesfull");
            navigate('/signUp');
            return;
        }
    }
    return (<div>
        <h1>Sign In</h1>
        <form className="SignUpInputCSS">

            <input type="email" value={em} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={pw1} placeholder="Password" onChange={(e) => setPw1(e.target.value)} />

            <button onClick={()=>handleSignIn()}>Sign In</button>
        </form>
    </div>)
}