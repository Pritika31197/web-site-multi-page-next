import React from 'react';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import '../src/app/globals.css';

const HomePage = () => {
  return (
    <>
      <HeaderComponent/>
        <div className='heading'>Agriculture</div>
        <div className='pera'>
          <div className='pera1'>
          Agriculture encompasses crop and livestock production, aquaculture, fisheries and forestry for food and non-food products. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities.Agriculture encompasses crop and livestock production, aquaculture, fisheries and forestry for food and non-food products. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities. While humans started gathering grains at least 105,000 years ago, nascent farmers only began planting them around 11,500 years ago. Sheep, goats, pigs and cattle were domesticated around 10,000 years ago. Plants were independently cultivated in at least 11 regions of the world. In the twentieth century, industrial agriculture based on large-scale monoculture came to dominate agricultural output.
          Today, small farms produce about a third of the world food, but large farms are prevalent. The largest one percent of farms in the world are greater than 50 hectares and operate more than 70 percent of the world farmland. Nearly 40 percent of agricultural land is found on farms larger than 1,000 hectares. However.

          </div>
          <div className='pera2'>
            <image src="Agri.jpg" height={500} width={700}/>
          </div>
        </div>
      <FooterComponent/>
      </>
  );
};

export default HomePage;