import styled from 'styled-components';

export const CheckoutItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Detail = styled.span`
  width: 23%;
`;

export const Quantity = styled.span`
  display: flex;
  width: 23%;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const QuantityValue = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
    padding-right: 2vw;
    cursor: pointer;
`;