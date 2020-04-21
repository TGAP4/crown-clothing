import React, {useState} from 'react';
import * as S from './contact-page-styles';

import axios from 'axios';

import CustomButton from '../../components/custom-button/custom-button';


const ContactPage = () => {
  const [messageText, setMessageText] = useState('');

  const onHandleChange = event => {
    const {value} = event.target;
    setMessageText(value);
  }

  const onSubmit = event => {
    event.preventDefault();
    event.persist();
    axios({
      url: 'contact',
      method: 'post',
      data: {message: messageText}
    })
    .then(response => {
      console.log('Message: ', response.data.message);
      alert('Message received!  We will get back to you shortly.');
      event.target.reset();
    })
    .catch(error => {
      console.log(error);
      alert(`There was an issue submitting your message.  Please try again later.`);
    });
  };

  return (
    <S.ContactPage>
      <S.Title>Questions? Comments? Let us know!</S.Title>
      <S.ContactForm onSubmit={onSubmit}>
        <S.MessageText
          required
          placeholder='Your message here'
          onChange={onHandleChange}
        />
        <S.Button as={CustomButton} type='submit'>
          Submit
        </S.Button>
      </S.ContactForm>
    </S.ContactPage>
  );
};

export default ContactPage