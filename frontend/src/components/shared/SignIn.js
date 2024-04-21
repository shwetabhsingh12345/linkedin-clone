import '../../App.css';
import { useState } from 'react';
import Navbar from './Navbar';
import login_logo from '../../assets/images/login.svg'
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';


function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")


  const handleSubmit = async(e)=>{
    e.preventDefault()
    const user = {email, password}

    const response = await fetch('http://localhost:8000/auth/login',{
        method: 'POST',
        body: JSON.stringify(user),
        headers:{
            'Content-Type': 'application/json',
        }
    })
    const result = await response.json()

    if (!response.ok){
        console.log(result.error)
        setError(result.error)
    }
    if(response.ok){
        console.log(result)
        setError('')
        setEmail('')
        setPassword('')
    }
  }

  return (
    <div className="App w-screen h-screen">
      <Navbar/>
      <div className='w-full h-9/10 flex'>
        <div className='w-1/2 h-full pl-72 pr-3 text-left flex flex-col items-start justify-center'>
          {/*actual login form */}
          <h1 className='text-6xl text-red-700 font-extralight'>
            Welcome to your professional community
          </h1>
          <form onSubmit={handleSubmit}>
          <div className='inputs w-3/4 pt-7 space-y-6'>
          <TextInput label="Email or phone" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <PasswordInput label="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <div className='text-linkedin-blue font-semibold'>
            Forgot password?
          </div>
          <button type="submit" className='bg-linkedin-blue text-white w-full p-4 font-semibold rounded-full'>Sign in</button>
          </div>
          </form>
        </div>
        <div className='w-1/2 h-full flex justify-start items-center'>
          {/*this is logo side */}
          <div className='w-3/4'>
          <img alt='login_logo' src={login_logo}/>
          </div>  
          
        </div>
      </div>
    </div>
  );
}

export default SignIn;
