import styled from 'styled-components'

export const Image = styled.img`
    width: 100%;
    height: 100%;
    display:flex;
    object-fit: cover;
    align-self: center;
    ${(props) => props.hoverable
    && ':hover { opacity: 0.6; }'}
`;
