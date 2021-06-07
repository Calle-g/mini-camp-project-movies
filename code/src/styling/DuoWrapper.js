import styled from 'styled-components'

export const DuoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 3fr;
  gap: 10px;
  @media screen and (max-width: 600px) {
    img {
      width: 90%;
      margin: 0 auto;
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
    }
    > div {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 6;
    }
  }
`;
