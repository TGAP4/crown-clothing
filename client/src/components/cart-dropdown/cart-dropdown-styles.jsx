import styled from 'styled-components';

const scrollingPosition = ({windowPosition}) => {
  if (windowPosition > 60) {
    return 'position: fixed; top: 30px;'
  }
}

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
  ${scrollingPosition}
`;

export const XButton = styled.div`
  font-size: 16px;
  color: gray;
  position: absolute;
  top: 0;
  right: 7px;
  cursor: pointer;
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
  margin-top: 20px;
`;
