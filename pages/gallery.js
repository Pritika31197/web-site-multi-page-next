import React from 'react';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import '../src/app/globals.css';

export default function gallery() {

  const images = [
    'https://1.bp.blogspot.com/-xbbjhMGR7BQ/YOvQz2AT4DI/AAAAAAAAAzg/bfxVpA4LhVMhAx4M8auiunxFaTYIzAEcACLcBGAsYHQ/s750/1515784437_4.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAv95XIh89mqMGqsHopVwtQ4leM2hwiCG-8siGsi_JiWOSC0bIb1q5GvOCIleh1q6FxTM&usqp=CAU',
    'https://www.rathinamcollege.edu.in/wp-content/uploads/2020/08/agri-blog-1.png',
    'https://study.com/cimages/videopreview/videopreview-full/subsistence-farming-definition-and-examples_140498.jpg',
    'https://study.com/cimages/videopreview/videopreview-full/subsistence-farming-definition-and-examples_140498.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6K-RNHW-xdLU0-xk9-mTA7mp_x8Q_VcDkA&usqp=CAU',
    'https://cdn.kastatic.org/ka-perseus-images/fe5790ed9e8b93a2bc3d1156ec2f9f6b1ce479c4.png',
    'https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/08/01/Pictures/paddy-farmer_1fddfd96-7673-11e7-930d-20ef51ded0a4.JPG',
    'https://images.picxy.com/cache/2021/1/6/c2ddf93a0a786f67cce365dfece39ffd.jpg',
    'https://www.farmersjournal.ie/WEBFILES/000/177/857/175585-177857.jpg',
    'https://hbr.org/resources/images/article_assets/2017/05/may17-18-455175659.jpg',
    'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221230164654/Role-and-Importance-of-Agriculture.png',
    'https://static.toiimg.com/thumb/msid-60819959,width-400,resizemode-4/60819959.jpg',
    'https://1.bp.blogspot.com/-xbbjhMGR7BQ/YOvQz2AT4DI/AAAAAAAAAzg/bfxVpA4LhVMhAx4M8auiunxFaTYIzAEcACLcBGAsYHQ/s750/1515784437_4.jpg'


  ];
  return (
    <div>
      <HeaderComponent />
      <div className='heading'>Gallery</div>
      <div>
        {images.map((item, index) => (
          <img src={item} className='imgs' layout={'raw'} key={index} />
        ))}
      </div>
      <FooterComponent />
    </div>
  );
};
