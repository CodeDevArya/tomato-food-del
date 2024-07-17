import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'

const LoginPopup = ({ setShowLogin }) => {

    const { url, setToken } = useContext(StoreContext)

    const [currState, setCurrState] = useState("Login")
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const onChangedHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setData(data => ({ ...data, [name]: value }))
    }

    const onlogin = async (e) => {
        e.preventDefault()
        let newUrl = url;

        if (currState === 'Login') {
            newUrl += '/api/user/login'
        } else {
            newUrl += '/api/user/register'
        }
        const response = await axios.post(newUrl, data)

        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem('token', response.data.token);
            setShowLogin(false)
        }else{
            alert(response.data.message)
        }
    }


    return (
        <div className='absolute z-10 w-[100%] h-[100%] bg-[#00000090] grid'>
            <form onSubmit={onlogin} className="place-self-center w-login-container text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-lg text-[14px] animate-fadeIn">
                <div className="flex items-center justify-between text-black">
                    <h2 className='font-semibold text-2xl'>{currState}</h2>
                    <img className='w-[16px] cursor-pointer' onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="flex flex-col gap-[20px]">
                    {currState === 'Login' ? <></> : <input name='name' onChange={onChangedHandler} value={data.name} className='outline-none border border-[#c9c9c9] p-[10px] rounded-xl' type="text" placeholder='Your name' required />}
                    <input name='email' onChange={onChangedHandler} value={data.email} className='outline-none border border-[#c9c9c9] p-[10px] rounded-xl' type="email" placeholder='Your email' required />
                    <input name='password' onChange={onChangedHandler} value={data.password} className='outline-none border border-[#c9c9c9] p-[10px] rounded-xl' type="password" placeholder='Password' required />
                </div>
                <button type='submit' className='border-none p-[10px] rounded-lg text-white bg-[tomato] text-[15px] cursor-pointer'>{currState === 'Sign Up' ? 'Create account' : 'Login'}</button>
                <div className="flex items-start gap-2 mt-[-15px] ">
                    <input className='mt-[5px] cursor-pointer' type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy. </p>
                </div>
                {
                    currState === 'Login'
                        ? <p>Create a new account? <span onClick={() => setCurrState('Sign Up')} className='cursor-pointer text-[tomato] font-medium'>Click here</span></p>
                        : <p>Already have an account? <span onClick={() => setCurrState('Login')} className='cursor-pointer text-[tomato] font-medium'>Login here</span></p>
                }


            </form>
        </div>
    )
}

export default LoginPopup
