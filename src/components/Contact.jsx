import React from 'react';
import img1 from "../assets/q1.jpg"

function Contact() {
  return (
    <>
    <div className='w-full relative flex justify-center'>
        <img src={img1} alt="" />
       
     
      <div className="max-w-2xl mx-auto absolute w-[50rem]  mt-28">
       
        <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
        
        <div className="bg-white opacity-90 shadow-md rounded-lg p-6">
          
           
       
        
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Reach Us</h2>
          <p className='text-[1.5rem]'>Firm Name: S.H AGRO</p>

          <p className="mt-1 text-[1.5rem]">114 Mani Avenue, <br />Front Of Bannk of India,<br /> Vednagar,Ujjain(M.P)</p>
          <p className='text-[1.5rem]'>Phone:9244912667</p>
          
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
            <a href="#" className="text-blue-400 hover:text-blue-600">Twitter</a>
            <a href="#" className="text-red-600 hover:text-red-800">Instagram</a>
          </div>
        </div>
      </div>
    </div>
    </div>
 
    </>
  );
}

export default Contact;
