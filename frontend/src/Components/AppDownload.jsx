import React from 'react'
import {assets} from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='m-auto mt-[100px] text-app-download-main text-center font-semibold animate-fadeIn' id='app-download'>
        <p className=''>For Better Experience Download <br /> Tomato App</p>
        <div className='flex gap-5 mt-[40px] justify-center'>
            <img className='w-app-download-image max-w-[180px] transition-all duration-300 cursor-pointer hover:scale-105' src={assets.play_store} alt="play_store" />
            <img className='w-app-download-image max-w-[180px] transition-all duration-300 cursor-pointer hover:scale-105' src={assets.app_store} alt="app_store" />
        </div>
    </div>
  )
}

export default AppDownload
