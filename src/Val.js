import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import'./Val.scss'

function Val() {
        const[email,setEmail] = useState('');
        const[Password,setPassword] = useState('');
        // const[phoneno,setphoneno]=useState('')
        const[errors,setErrors] = useState({email:'',Password:''});
        const[showPassword, setShowPassword] =useState(false)

        const HandleSubmit = (e) => {
          e.preventDefault();
          const newErrors = {email:'',Password:''};
          let valid = true; 

        if (email === ""){
          newErrors.email ='Email is required';
          valid = false;
        }
    
        if(Password === ""){
          newErrors.Password = 'Password is required'
          valid = false;
        }

        else if(Password.length<6) {
          newErrors.Password = 'Password must be atleast 6 characters long'
          valid = false;
          toast.error(newErrors.Password)
        }
       
setErrors(newErrors);

if(valid)
{
  if(email==="kapil@123.com"&& Password==="leodass"){
   toast.success("validation succesfull")
    setTimeout(()=>{window.location.href = '/Basic' },3000)
  }
  else{
    toast.error('Invalid email or password');
  } 
}
        }

        const visibility = () =>{
          setShowPassword(!showPassword)
        }

 return (   
    <form className='hi' onSubmit={HandleSubmit}>
        <div>

         
         <label>Email:</label>

         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
        </div>

        <div>
         <label>Password:</label>

         <input className='in' type= {showPassword ? "text":"password"} value={Password} onChange={(e) => setPassword(e.target.value)} required></input>

         <span  className='eye' onClick={visibility}>{showPassword ? <FaEye/> : <FaEyeSlash/>} </span>



         <span style={{color:"red"}}>{errors.Password}</span>
         <br></br>

         {/* <label>Phone number</label>
         <input type='text' value={phoneno} onChange={(e)=> setphoneno(e.target.value)}></input>
         <span style={{color:"red"}}>{errors.phoneno}</span> */}

        <button className='btn'>Submit</button>
        <ToastContainer/>
        </div>
    </form>
    
  )                
}

export default Val