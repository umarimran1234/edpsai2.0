// components/Card.js
"use client"
import React from 'react';
import Image from 'next/image';
const Card = ({ heading , imageSrc, text , onClick }) => {
  return (
    <div onClick={onClick} style={{ width:'max-content' , background:'#888888 ', borderRadius:'2rem'}} className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image width={300} height={300} style={{borderRadius:'2rem'}} src={imageSrc} alt="Card image" className=" rounded p-4  h-48 object-cover"/>
      <div className="p-4">
        <h5 className='text-black' style={{fontWeight:'bold'}} > {heading} </h5>
        <p className="text-gray-700">{text}</p>
      </div>

    </div>
  );
};

export default Card;
