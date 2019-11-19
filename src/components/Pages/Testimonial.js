import React from 'react';
import {Header, SubFooter, Footer} from '../Reusable/Reusable'
import './Testimonial.css';

import Zainab from '../Assets/Zainab_test.png';
import Winifred from '../Assets/Winifred_test.png';
import Sarah from '../Assets/Sarah_test.png';
import Tobe from '../Assets/Tobe_test.png';
import Wale from '../Assets/Wale_test.jpg';

const Testimonial = () => {
  let title = 'TESTIMONIALS';
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
    <div className='test_container'>
      <div className='block_container'>
        <div className='block'>
          <img alt='Zainab' src={Zainab}/>
          <span className='quote'>“</span>
          <p>
            Although I was always keen on earning an international degree from 
            a reputable university in the UK, I was unable to meet the financial 
            requirements. I learnt about Nubi educational counselling from a 
            relative who is a reputable client. From my first interaction with 
            the team to date, I have found them to be very pleasant, knowledgeable 
            and providing good tutelage and guidance. <br /> <br/>
            I was informed about scholarship opportunities in my area of interest 
            from prestigious universities in the UK. The support I received during 
            the admission process to the visa application was enormous. I have been 
            able to realise my dreams by being awarded a full scholarship at the 
            University of Exeter. The relationship has been sustained even after 
            commencement of studies and I can feel the genuine interest in my career 
            as I forge ahead.
            <br/> <br/>
            <span className='title'>— Zainab Aliyu (Lovering Award Holder, 
              University of Exeter)
            </span>
          </p>
        </div>
        <div className='divider' />
        <div className='block'>
          <img alt='Tobe' src={Tobe}/>
          <span className='quote'>“</span>
          <p>
            From the moment I finished secondary school, Nubi Agency became a 
            word synonymous with progress in my household. It is because of this 
            group of dedicated and caring people that I was able to figure out 
            that A-levels was the next step in the right direction upon graduation 
            from my alma matter. Not only did they encourage me to take A-levels, 
            they also found me a prestigious school which pleased my parents and I 
            alike.
            <br/> <br/>
            As my student visa was processed with the utmost scrutiny, the staff would 
            work extra hours just to make sure everything was in place. I was always 
            treated like family during my sessions at Nubi and all my questions were 
            answered with respect.
            <br/> <br/>
            After my A-levels, I went to Nubi once again to help with my student 
            visa for university due to their vast experience in the business. 
            I was not disappointed as I am now an Electrical Engineering 
            undergraduate in University College London. I strongly recommend 
            Nubi Agency for any aspiring students, as you will never get 
            disappointed and always get what you deserve.
            <br/> <br/>
            <span className='title'>— Tobe Ofili</span>
          </p>
        </div>
        <div className='divider' />
        <div className='block'>
          <img alt='Winifred' src={Winifred}/>
          <span className='quote'>“</span>
          <p>
          Presently, I am undergoing an LLM course in Maritime Law in the 
          University of Southampton, after being called to the Nigerian Bar as 
          a Barrister of the Supreme Court of Nigeria in November 2011. The 
          experience and the fact that I have developed my personal way of 
          studying and taking in as much of the University experience, both 
          educationally and socially, I would say, can be attributed to the fact 
          that I had a good foundation due to where I did my undergraduate 
          studies in LLB Law: University of Essex.
          <br/><br/>
          Nubi Education helped me a great deal. At first, most schools were 
          reluctant to accept me because I was too young for a Foundation course 
          in Law, which is required as an alternative to an A-Levels degree for 
          a pre-degree University course. Not only was I accepted and made 
          comfortable and elected as a Student Representative for the 
          International year students, but a guardian was also appointed for me 
          to monitor my progress and make sure I was settling in right, until I 
          turned 18. The University also had a good curriculum for Law, 
          specializing in all of the needed subjects that made it quite easy 
          for me not to have any issues when I attended the Nigerian Law School.
          <br/> <br/>
          At first instinct, I had originally wanted to apply to stay in an en 
          suite accommodation, which would have entitled me to have my own 
          bathroom, but also kept me away from making friends fast. Nubi Education 
          advised me to apply for an accommodation with more people, where the 
          bathroom and kitchen was shared for my Foundation year, in order to make 
          friends and establish myself first, after which I could change if I wanted 
          to. I am glad to say that I definitely made more friends, not only with 
          Nigerian citizens but with people from other countries.
          <br/> <br/>
          All in all, I can definitely say that Nubi Education played vital roles in 
          my admissions to University of Essex and University of Southampton for my 
          undergraduate and post graduate degree education. I am grateful and I 
          thank God for their help.
          <br/> <br/>
          <span className='title'>— Winifred Igbokwe – (University of Southampton)</span>
          </p>
        </div>
        <div className='divider' />
        <div className='block'>
          <img alt='Sarah' src={Sarah}/>
          <span className='quote'>“</span>
          <p>
          My first degree was at Babcock University. I am presently studying an Msc. 
          in International Business and Entrepreneurship. On my first day, the 
          reception by the Student Union was delightful, I was immediately given my 
          room and all the best support I needed. I am impressed with the University 
          of Essex, the teaching methodology and value of team work is exceptionally 
          challenging, the motivation i get from the environment that is bursting 
          with intellectuals is also intriguing.
          <br/> <br/>
          I also love my course, i usually tell my friends that “this is the best 
          course i have ever chosen”. my tutor has helped me to build up myself 
          academically, and the clubs and support groups help to put to practice all 
          that I have learnt. Nubi Educational did not only focus on my Visa Application 
          (which most agencies do), they most importantly helped me to find the best 
          possible module to fit my goals in life, they are highly professional and 
          are confident in their abilities (which is of a very high reputation), I 
          will most definitely recommend them to any student seeking for a bright 
          future study abroad.
          <br/> <br/>
          <span className='title'>— Sarah Cincin Yacim (University of Essex)</span>
          </p>
        </div>
        <div className='divider' />
        <div className='block'>
          <img alt='Wale' src={Wale}/>
          <span className='quote'>“</span>
          <p>I have been a client of this organisation for a year and half. 
            In this time, I have found them to be professional, courteous and 
            proficient. I cannot praise this agency enough for the help they 
            rendered in helping me secure a place in Glasgow Caledonian 
            University for my Masters programme. I would highly recommend their 
            service if you are looking to secure a place to study abroad. Many 
            thanks to Nubi Education for it was a pleasure.
            <br/> <br/>
            <span className='title'>— OLUMIDE WALE (Glasgow Caledonian University)</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;