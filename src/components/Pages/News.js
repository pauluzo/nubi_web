import React from 'react';
import './News.css';
import {Header, SubFooter, Footer} from '../Reusable/Reusable';

import John from '../Assets/John_news.jpg';

const News = () => {
let title = 'NEWS AND EVENTS';

  return(
    <div>
      <Header title={title} />
      <Body />
      <SubFooter />
      <Footer />
    </div>
  );
}

const Body = () => {
  return(
    <div className='news_container'>
      <div className='news_block'>
        <img alt='John Gregory' src={John} />
        <p>
        Meet with John Gregory, Director of International 
        Recruitment, University of Alberta. Discuss 
        applications, admission and scholarships to a leading 
        Canadian University.
        </p>
      </div>
      <button>CLICK TO LEARN MORE</button>
    </div>
  );
}

export default News;