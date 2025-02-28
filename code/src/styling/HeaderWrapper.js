import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  position: sticky;
  position: -webkit-sticky;
  z-index: 999;
  top: 0;
  width: inherit;
  max-width: inherit;
  background-color: #000000;
  display: grid;
  grid-template-columns: 80px 4fr 1fr;
  grid-gap: 10px;
  border-bottom: 1px solid #ffffff;
  @media screen and (max-width: 768px) {
    grid-template-columns: 80px 1fr 10px;;
  }
`;
