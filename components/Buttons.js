import styled from 'styled-components'

export const Button = styled.div`
    display: inline-block;
    background-color: ${props => props.theme.primaryColor};
    color: #fff;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
    border: 1px solid transparent;
    cursor: pointer;
    padding: 0.7rem 1rem;
    text-align: center;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: ${props => props.theme.primaryColor};
        background-color: #fff;
        border: 1px solid ${props => props.theme.primaryColor};
    }
`