import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => (props.columns ? props.columns : '5')}, minmax(100px, 1fr));
  grid-gap: 0.4em;
  position: relative;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(${(props) => (props.columns ? props.columns - 1 : '4')}, minmax(100px, 1fr));
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
