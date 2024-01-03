import React from 'react';
import './banner.css'
function Banner() {
  return (
    <div className="banner bg-cover bg-center flex items-center justify-center ">
      <div className='text-gray-800  text-center w-3/4'>
        <h3 className="text-4xl font-bold mb-4">Fresh And<span className='ml-2 text-orange-500'>Organic</span> Products For You</h3>
        <p className="text-lg p-y-4 px-0 leading-4.5">Lorem ipsum, dolor sit amet consectetur adipisicing elit  Aliquam Libero Nostrum veniam facere Tempore Nisi</p>
        <a href='#' className='mt-4 inline-block px-8 py-2 text-lg rounded-md border-2 border-black text-black cursor-pointer hover:bg-orange-500 hover:text-white'>Shop Now</a>
      </div>
    </div>
  );
}

export default Banner;