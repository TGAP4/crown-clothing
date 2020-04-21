import styled from 'styled-components';


export const ContactPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  padding: 5px;
  border-radius: 5px;
  resize: none;
  font-size: 15px;

  @media screen and (max-width: 800px) {
    width: 70vw;
  }
`;

export const Button = styled.div`
  width: 150px;
`