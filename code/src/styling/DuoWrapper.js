import styled from 'styled-components'

export const DuoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 3fr;
  gap: 10px;
  @media screen and (max-width: 768px) {
    img {
      width: 90%;
      margin: 0 auto;
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 6;
    }
    > div {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 4;
      grid-row-end: 7;
    }
  }
`;
