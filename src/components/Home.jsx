import React, { useEffect } from 'react';
import img1 from "../assets/pesticide1.jpeg"
import img3 from "../assets/pesticide3.jpeg"
import img4 from "../assets/pesticide4.jpeg"






import front  from "../assets/front.jpg";
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
const handleClick=()=>{
  navigate("/about")
}
 
  return (
    <div>
      <div className="bg-green-500 text-white p-8 text-center hover:text-orange-200">
        <h1 className="text-4xl font-bold">Welcome to Our Farm</h1>
        <p className="mt-4 text-lg">Leading the way in sustainable agriculture.</p>
      </div>
      
        <div className='relative flex justify-start'>
    <img src={front} alt=""  />
    <div  className='text-white absolute  text-6xl mt-[26rem] ml-10 font-serif hover:text-green-500'>NO FARMERS<br /> NO FOOD <br />NO FUTURE</div>
    </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        <div className="p-4 bg-green-200 rounded-lg shadow">
          <h2 className="font-semibold text-xl">Organic Products</h2>
          <p>Our products are free from harmful chemicals and pesticides, ensuring only the best for your table.</p>
        </div>
        <div className="p-4 bg-green-200 rounded-lg shadow">
          <h2 className="font-semibold text-xl">Community Engagement</h2>
          <p>We work closely with the local community to foster an understanding of sustainable farming practices.</p>
        </div>
        <div className="p-4 bg-green-200 rounded-lg shadow">
          <h2 className="font-semibold text-xl">Innovative Farming</h2>
          <p>Utilizing the latest in agricultural technology to improve yields and reduce environmental impact.</p>
        </div>
      </div>

        
   <div >
   <img src={img4} className='w-full' />

  <h1 className='text-6xl font-serif font-bold gap-x-40 capitalize items-center ml-[370px] space-x-7 hover:text-red-400' >Choose What's Perfect  <br />For Your Field</h1>

    <img src={img3} alt="" className='w-full'/>
  

   </div>

      <div className="bg-white text-center p-8">
        <h2 className="text-3xl font-bold text-green-700">Get Involved</h2>
        <p className="mt-4 text-lg">Join us on our mission to make agriculture sustainable for future generations.</p>
        <button onClick={()=>{handleClick()}} className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Home;
