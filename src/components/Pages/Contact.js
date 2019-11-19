import React from 'react';
import './Contact.css';

import {Header, Footer, SubFooter} from '../Reusable/Reusable';

const Contact = () => {
  let title = 'CONTACT US';

  return(
    <div>
      <Header title={title} />
      <Body />
      <SubFooter />
      <Footer />
    </div>
  )
}

const Body = () => {
  return(
    <div className='contact_container'>
      <div className='inner_container'>
        <div className='map_address'>
          <map className='map'>
            <iframe title='Office Address' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5013781469856!2d3.414564879010149!3d6.45797872573655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b35a94fa349%3A0x89e30516099fd3ba!2s300a%20Surulere%20Way%2C%20Dolphine%20Estate%2C%20Lagos!5e0!3m2!1sen!2sng!4v1571327982983!5m2!1sen!2sng" 
              frameBorder="0" style={{border:"0"}} allowFullScreen="">
            </iframe>
          </map>
          <p className='address'>
            <b>Address:</b>  300a Surulere Way Dolphin Estate, Ikoyi, Lagos, Nigeria.
            <br/>
            <b>Phone Numbers:</b> +234 (1) 453 408 4, +234 (90) 9174 9223, +234 (70) 6964 4299
            <br/>
            <b>Email:</b> info@nubieducation.com
          </p>
        </div>
        <div className='divider' />
        <Form />
        <div className='divider' />
        <p style={{fontSize: '20px', marginTop: '20px', fontWeight: '600px', color: '#5f5f5f'}}>OR REACH US ON SOCIAL MEDIA</p>
      </div>
    </div>
  );
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('This form has been submitted');
  }

  render() {
    return(
      <div className='form_container'>
        <p style={{fontSize: '25px', fontWeight: '900px', color: '#5f5f5f'}}>SEND US A DIRECT MESSAGE <br/><br/></p>
        <form style={{width: '100%'}} onSubmit={this.handleSubmit}>
          <div className='names'>
            <div className='input_title'>Name*</div>
            <div className='name_input_container'>
              <div >
                <input name='firstName' type='text' 
                  onChange={this.handleChange} value={this.state.firstName}
                />
                <br/>
                <label>First Name</label>
              </div>
              <div>
                <input name='lastName' type='text' 
                  onChange={this.handleChange} value={this.state.lastName}
                />
                <br/>
                <label>Last Name</label>
              </div>
            </div>
          </div>
          <div className='other_titles'>
            <label className='input_title'>Email Address*</label>
            <br/>
            <input name='email' type='text' 
              onChange={this.handleChange} value={this.state.email}
            />
          </div>
          <div className='other_titles'>
            <label className='input_title'>Subject*</label>
            <br/>
            <input name='subject' type='text' 
              onChange={this.handleChange} value={this.state.subject}
            />
          </div>
          <div className='other_titles'>
            <label className='input_title'>Message*</label>
            <br/>
            <textarea name='message' type='text' 
              onChange={this.handleChange} value={this.state.message}
            />
          </div>
          <div>
            <input className='submit_button' type='submit' value='SUBMIT'/>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;