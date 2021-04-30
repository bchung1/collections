import styled from 'styled-components';

const Container = styled.div`
    height: 150px;
    border-top: 1px solid ${props => props.theme.gray2};
    margin-top: 3rem;
`

export default function Footer(){
    return (
        <Container />
    )
}