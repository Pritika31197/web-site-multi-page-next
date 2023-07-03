import React from 'react';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

export default function AboutPage() {
  return (
    <div>
        <HeaderComponent></HeaderComponent> 
      <h1>Welcome to the About Page</h1>
      <FooterComponent></FooterComponent>
    </div>
  );
};