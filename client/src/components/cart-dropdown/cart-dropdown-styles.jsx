import styled from 'styled-components';

export const CartDropdown = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 55px;
  z-index: 5;
`;

export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

export const EmptyMessage = styled.span`
      font-size: 18px;
      margin: 50px auto;
`;

export const Button = styled.div`
  margin-top: auto;
`;
