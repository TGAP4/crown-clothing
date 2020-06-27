import styled from 'styled-components';


export const ContactPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 0.01em;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  margin: 10px 0; 
  text-align: center; 
`;

export const MessageText = styled.textarea`
  height: 150px;
  width: 500px;
  margin: 15px 0 25px;
  padding: 8px;
  border-radius: 5px;
  resize: none;
  font-size: 18px;
  font-family: 'Open Sans Condensed';

  @media screen and (max-width: 800px) {
    width: 70vw;
  }
`;

export const Button = styled.div`
  width: 150px;
`