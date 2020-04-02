import styled, {css} from 'styled-components';

const getButtonStyle = ({type}) => {
  switch (type) {
    case 'inverted':
      return inverted;
    case 'googleSignIn':
      return googleSignIn;
    default:
      return basic;
  }
};

const basic = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const inverted = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignIn = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #286cda;
    border: none;
  }
`;

export const CustomButton = styled.button`
  min-width: 165px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  ${getButtonStyle} 
`;

