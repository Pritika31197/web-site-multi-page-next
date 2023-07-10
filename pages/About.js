import React from 'react';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import '../src/app/globals.css';

export default function AboutPage() {
  return (
    <div>
      <HeaderComponent />
      <div className='heading'>About Us</div>
      <div>
        
      </div>
      <div className='typeOf'>Types of Agriculture in India</div>
      <div className='list'>
        <ul className='item'>
          <li>Mixed farming</li>
          <li>Plantation</li>
          <li>Subsistence farming</li>
          <li>Dry land & wet land farming</li>
          <li>Intensive & extensive farming</li>
        </ul>
      </div>
      <div className='typeOf'>List of Best and Affordable Agricultural Tools in India</div>
      <div className='list'>
        <ul className='item'>
          <li> Axe </li>
          <li>Rake</li>
          <li>Shovel</li>
          <li>Wheel Barrow</li>
          <li>Hedge Shears</li>
          <li> Pruning Saw </li>
          <li>Gardening Fork</li>
          <li>Watering Can</li>
          <li>Tractor Implements</li>
          <li>Machete</li>
          <li>Seeder and Fertilizer</li>
          <li>Land Mover</li>
        </ul>
      </div>
      <FooterComponent />
    </div>
  );
};