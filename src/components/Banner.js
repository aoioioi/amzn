import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';
import Image from 'next/image';

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="https://m.media-amazon.com/images/I/61VdiCqXFlL._SX3000_.jpg" alt="" />
          {/* <img loading="lazy" src="https://links.papareact.com/7ma" alt="" /> */}
        </div>
        <div>
          {/* <Image src={c2} height='900' width='900' objectFit="contain" /> */}
          {/* <img loading="lazy" src="https://m.media-amazon.com/images/I/61VdiCqXFlL._SX3000_.jpg" alt="" /> */}
          <img loading="lazy" src="https://m.media-amazon.com/images/I/61xZ8XpT9BL._SX3000_.jpg" alt="" />
        </div>
        <div>
          {/* <img loading="lazy" src="https://links.papareact.com/7ma" alt="" /> */}
          {/* <img loading="lazy" src="https://links.papareact.com/7ma" alt="" /> */}
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
