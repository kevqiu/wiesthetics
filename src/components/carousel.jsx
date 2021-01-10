import React, {useState} from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';

const MyCarousel = () => {
  const [state, setState] = useState({
    value: 0,
    slides: [
      (<img src={img1} alt="1" style={{ maxWidth:'400px', maxHeight:'400px', height:'auto', width:'auto' }}/>),
      (<img src={img2} alt="2" style={{ maxWidth:'400px', maxHeight:'400px', height:'auto', width:'auto' }}/>),
      (<img src={img3} alt="3" style={{ maxWidth:'400px', maxHeight:'400px', height:'auto', width:'auto' }}/>),
      (<img src={img4} alt="4" style={{ maxWidth:'400px', maxHeight:'400px', height:'auto', width:'auto' }}/>),
      (<img src={img6} alt="5" style={{ maxWidth:'400px', maxHeight:'400px', height:'auto', width:'auto' }}/>),
      (<img src={img7} alt="6" style={{ maxWidth:'400px', maxHeight:'400px', height:'auto', width:'auto' }}/>),
      (<img src={img8} alt="7" style={{ maxWidth:'400px', maxHeight:'400px', height:'auto', width:'auto' }}/>)
    ]
  })

  const handleChange = (value) => {
    setState({value: value})
  }

  return (
    <div>
      <Carousel
        centered
        itemWidth={400}
        infinite
        autoPlay={3500}
        animationSpeed={1000}
        value={state.value}
        slides={state.slides}
        onChange={() => handleChange(state.value)}
      />
    </div>
  );
}

export default MyCarousel