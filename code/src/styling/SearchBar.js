import styled from 'styled-components'

export const SearchBar = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  -webkit-box-align: center;
     -ms-flex-align: center;
        align-items: center;
  -webkit-box-pack: center;
     -ms-flex-pack: center;
  justify-content: center;
  div {
    width: 100%;
    position: relative;
    display: flex;
  }
  input {
    width: 100%;
    border: 1px solid #828282;
    border-right: none;
    padding: 2px 7px;
    height: 34px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #000000;
    line-height: 30px;
    font-size: 18px;
  }
  input:focus {
    color: #000000;
  }
  a {
    width: 36px;
    height: 22px;
    border: 1px solid #828282;
    background: #ffffff;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
    padding: 8px;
  }
  .svg-icon {
    width: 100%;
    height: 100%;
  }
  
  .svg-icon path,
  .svg-icon polygon,
  .svg-icon rect {
    fill: #000000;
  }
  
  .svg-icon circle {
    stroke: #000000;
    stroke-width: 1;
  }
`;
