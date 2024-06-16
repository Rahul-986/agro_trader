import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const About=()=>{
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/contact");
  }
  return(
    <>
   
    <div className="space-y-10">
      <section className="bg-green-500 text-white p-8 text-center">
        <h1 className="text-3xl font-bold"> </h1>
  <section className="p-8">
  <h2 className="text-2xl font-semibold">Our History</h2>
  <p className="mt-4 text-gray-700">
    Founded in 1995, our journey began with a small family-owned farm. Over the years, we have grown into a leading agricultural enterprise, focused on innovation and sustainability. Our commitment to organic farming methods has not only enriched our soil but has also supported the local economy and community health.
  </p>
</section>
</section>

<section className="bg-gray-100 p-8">
  <h2 className="text-2xl font-semibold">Meet Our Team</h2>
  <div className="flex flex-wrap justify-center mt-4">
    <div className="m-4 p-4 bg-white shadow-lg rounded-lg">
      <img src="https://via.placeholder.com/150" alt="Team member" className="h-40 w-40 rounded-full mx-auto"/>
      <div className="text-center mt-2">
        <p className="text-lg font-medium">Shakir Usain</p>
      </div>
    </div>
   
  </div>
</section>

<section className="bg-green-600 text-white text-center p-8">
  <h2 className="text-2xl font-bold">Get Involved</h2>
  <p className="mt-4">Join us in our journey towards a greener future. Reach out to learn more about our work and how you can contribute.</p>
  <button className="mt-4 px-6 py-2 bg-white text-green-600 font-semibold rounded hover:bg-gray-200 transition duration-300 "
   onClick={()=>{{handleClick()}}}>
    Contact Us
  </button>
</section>
</div>
</>
  )
}
 
export default About;
