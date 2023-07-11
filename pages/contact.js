import React from 'react';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import '../src/app/globals.css'

export default function contact() {
  return (
    <div>
      <HeaderComponent />
      <div className='heading'>History Of Agriculture</div>
      <div className='defined'>Agriculture, also known as farming, is the production of food, fiber, animal feed and other goods by harvesting plants and animals. Agriculture is now practiced throughout the world and is an essential part of human civilization and its history dates back thousands of years. Heres a timeline of the history of agriculture:</div>
  
      <div className='typeOf'>Irrigation and Canal Networks (4000-3000 BCE)</div>
      <div className='defined'>Irrigation systems were developed in Egypt and Mesopotamia to help regulate the flow of rivers and ensure the availability of water for crops. One of the most impressive irrigation systems developed during this time was the quant, an underground canal used to tap into underground streams.</div>

      <div className='typeOf'>Improvements in Farming Implements (3000-1000 BCE)</div>
      <div className='defined'>During the Bronze Age, advanced metalworking techniques led to the development of stronger farming implements. This allowed for more efficient tilling of the soil and increased agricultural productivity. The moldboard plow and crop rotation were also introduced during this time.</div>

      <div className='typeOf'>British Agricultural Revolution (1700s-1800s)</div>
      <div className='defined'>The British Agricultural Revolution was a period of significant agricultural productivity in Britain. New methods of crop rotation and cultivation of previously unused land were introduced, and new crops such as the turnip were grown.</div>

      <div className='typeOf'>Agricultural Policy (1900s-present)</div>
      <div className='defined'>Government subsidies and regulations have been used to support agricultural development and protect labor, the environment, and animal welfare. Refrigerated transport companies are also essential for the transport of perishable goods.</div>

      <div className='typeOf'>The Future of Agriculture (present-future)</div>
      <div className='defined'>The future of agriculture will likely involve the continued development and use of emerging technologies and innovations, such as robotics and artificial intelligence. Precision agriculture, which uses data and analytics to optimize crop yields and minimize inputs, will also become more important. Vertical farming, which involves growing crops in stacked layers, and agroforestry, which integrates trees and shrubs into agricultural landscapes, may also become more prevalent.</div>


      <FooterComponent />
    </div>
  );
};