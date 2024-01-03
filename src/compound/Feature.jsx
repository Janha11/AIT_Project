import React from 'react'
import './feature.css'
function Feature() {
    const content=[
    {
        img:"../../image/feature-img-1.png",
        title:'Fresh and Organic',
        content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit  Aliquam Libero',
        btn:'Read More'
    },
    {
        img:'../../image/feature-img-2.png',
        title:'Free Delivery',
        content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit  Aliquam Libero',
        btn:'Read More'
    },
    {
        img:'../../image/feature-img-3.png',
        title:'Easy Payments',
        content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit  Aliquam Libero',
        btn:'Read More'
    },

]
return (
    
    <div className='feature' id='feature'>
        <h2 className='text-3xl font-bold m-9 text-center'>Our<span className='text-orange-500'>Feature</span></h2>
        <div className='feature_main'>
      {content.map((feature, index) => (
        <div key={index} className='main'>
          <img src={feature.img} alt={feature.title} className='inline-block h-40 m-4'  />
          <h3 className='font-bold text-2xl text-blue-950 '>{feature.title}</h3>
          <p className='text-blue-950 text-base leading-7'>{feature.content}</p>
          <a   href='#' className='mt-4 inline-block px-8 py-2 text-lg rounded-md border-2 border-black text-black cursor-pointer hover:bg-orange-500 hover:text-white'>{feature.btn}</a>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Feature
