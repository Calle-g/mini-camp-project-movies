import styled from 'styled-components'

export const Image = styled.img`
    width: 100%;
    height: 100%;
    display: flex;
    object-fit: cover;
    align-self: center;
    ${(props) => props.hoverable
    && ':hover { opacity: 0.6; }'}
    ${(props) => props.hideOnShrink && '@media screen and (max-width: 600px) { display: none; }'}
`;
