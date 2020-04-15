import styled from 'styled-components';

export const CollectionPreview = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 600;
  margin: 20px 0 25px 10px;

  @media screen and (max-width: 800px) {
    margin: 0 0 25px 0;
  }
`;

export const Preview = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`