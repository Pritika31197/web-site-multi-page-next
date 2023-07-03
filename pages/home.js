import React from 'react';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

const HomePage = () => {
  return (
    <div>
        <HeaderComponent></HeaderComponent>   
      <h1>Welcome to the Home Page</h1>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default HomePage;