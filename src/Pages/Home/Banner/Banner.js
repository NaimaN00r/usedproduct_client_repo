import React from 'react';
import img1 from '../../../assets/BannerImg/banner1.jpg'
import img2 from '../../../assets/BannerImg/banner2.jpeg'
import img3 from '../../../assets/BannerImg/banner3.jpeg'
import img4 from '../../../assets/BannerImg/image4.jpeg'



const Banner = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full h-1/2">
    <img src={img4} alt='' className="w-full rounded-xl" />
    <div className="absolute flex justify-center transform -translate-y-1/2   top-2/4">
                    {/* <h1 className='text-8xl font-bold text-orange-600 text-center'>
                        Sell <br />
                        & Buy<br />
                        Mobiles
                    </h1> */}
                </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
   {/* <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} alt='' className="w-full rounded-xl h-1/" />
    <div className="absolute flex justify-end transform -translate-y-1/2 right-24 top-2/4">
                    <h1 className='text-6xl font-bold text-orange-600'>
                       Easier Enviornment <br />
                        To sell <br />
                        And Buy Mobiles
                    </h1>
                </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>  
   <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} alt='' className="w-full rounded-xl h-1/2" />
    <div className="absolute flex justify-end transform -translate-y-1/2 right-24 top-2/4">
                    <h1 className='text-6xl font-bold text-orange-600'>
                        Find Your <br />
                       desired mobile <br />
                        Easily
                    </h1>
                </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>   */}
</div>
    );
};

export default Banner;