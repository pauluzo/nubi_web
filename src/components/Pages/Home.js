import React from 'react';
import './Home.css';
import Image1 from '../Assets/home_image1.jpg';
import Image2 from '../Assets/home_image.jpg';
import {Header, Footer, SubFooter} from '../Reusable/Reusable';

const Home = () => {
  let title = `NUBI EDUCATIONAL COUNSELLING`;
  let subtitle = `Let's guide you to making the right choice`
  return(
    <div>
      <Header title={title} subtitle={subtitle} />
      <Body />
      <SubFooter />
      <Footer />
    </div>
  );
}

const Body = () => {
  return(
    <div className='home_body'>
      <div className='body_container'>
        <p className=' intro'>
          Nubi Educational Counselling  is one of the fastest growing 
          educational consultancy agencies in Nigeria. Established in
          2004, We place quality students from Nigeria to
          universities, colleges and boarding schools in the UK, USA, 
          Canada and Ireland. We also provide excellent visa counselling
          services as well as offering consultancy services to 
          educational institutions both locally and abroad. 
        </p>
        <div className='divider' />
        <div className='paragraph1'>
          <img src={Image1} className='imagee' alt='image1'></img>
          <p style={{marginBottom: '10px'}}>
            With the head office at our Lagos branch and offices in 
            Abuja and Port Harcourt, Nubi Education has become a 
            house-hold name in Nigeria. We have a track record of 
            placing students into top universities and colleges at all 
            levels from A’ Level to post-graduate studies.</p>
            <p> We work with 
            over 60 universities, colleges and boarding schools in the 
            UK, USA, Canada and Ireland and our team is made up of 
            seasoned educationists, counselors, and marketers who have 
            sound knowledge of the Nigerian Educational System as well as 
            the English, Canadian, American and Irish educational systems.
          </p>
        </div>
        <div className='divider' />
        <div className='paragraph2' >
          <img src={Image2} className='imagee2' alt='image2'></img>
          <p style={{marginBottom: '10px'}}>
            Our students and parents have been happy with our 
            services  and have been referring other students to us. 
            The word of mouth publicity has largely contributed to our success.</p> 
            <p>At Nubi Education we go beyond placements, to career counselling. 
            The students are given the opportunity to discover themselves and 
            make informed decisions about their career. We are aware that good 
            choices lead to successful destinations so we give quality and sincere 
            counsel that would help our students choose the right schools and course 
            to achieve their career goals.  
          </p>
        </div>
      </div>
      <button>CLICK TO LEARN MORE</button>
    </div>
  );
}

export default Home;