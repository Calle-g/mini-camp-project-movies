import styled from 'styled-components'

export const Button = styled.div`
  align-items: center;
  background-color: transparent;
  border: 1px solid #828282;
  ${(props) => (props.last ? 'opacity: 0.5;' : ':hover { cursor: pointer; background: rgba(107, 102, 102, 0.2); }')}
  color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 8px;
  font-weight: bold;
  font-size: 14px;
  ${(props) => (props.right && 'margin-left: auto;')}
  div {
    background-color: transparent;
    height: 11px;
    width: 11px;
    ${(props) => (props.left ? 'margin-right: 5px;border-bottom: 1px solid rgba(255,255,255);border-left: 1px solid rgba(255,255,255);transform: translateX(25%) rotate(45deg);'
    : 'margin-left: 5px;border-right: 1px solid rgba(255,255,255);border-top: 1px solid rgba(255,255,255);transform: translateX(-25%) rotate(45deg);')}
  }
`;
