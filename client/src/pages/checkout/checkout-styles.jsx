import styled from 'styled-components';

export const CheckoutPage = styled.div`
  width: 75%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 800px) {
    width: 90%;
    margin-top: 0;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  & :first-child {
    margin-right: 5px;
  }

  & :last-child {
    width: 8%;
    padding: 0 0.5vw 0 0;
    text-align: right;
  }

  @media screen and (max-width: 800px) {
    & :first-child {
      margin-right: 0;
    }
    
    & :nth-child(4) {
      width: 19%;
    }

    & :last-child {
      width: 12%;
    }
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  padding-left: 1vw;
`;

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const TestWarning = styled.div`
  text-align: center;
  margin: 15px 0 20px;
  font-size: 20px;
  color: red;
`;
