import styled, {css} from 'styled-components';
import {CustomButton} from '../custom-button/custom-button-styles';

const getImageUrl = ({imageUrl}) => {
  return css`background-image: url(${imageUrl})`;
};

export const Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  ${getImageUrl};
`;

export const CollectionItem = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  padding: 0 10px;
  margin-bottom: 30px;

  &:hover {
    ${Image} {
      opacity: 0.8;
    }

    ${CustomButton} {
      opacity: 0.85;
      display: initial;
    }
  }
  
  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      ${Image} {
        opacity: unset;
      }

      ${CustomButton} {
        opacity: unset;
      }
    }

    ${CustomButton} {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;
    }
  }
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;


export const Name = styled.span`
  margin-bottom: 15px;
`;

export const Price = styled.span`
  text-align: end;
  padding-right: 2px;
`;