import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: auto;
    height: 25vh;
    background-color: black;
    padding: 4rem;
    color: #fff;
`

export default function Footer(){
    return (
        <Container>
            <h4>This is the footer.</h4>
        </Container>
    )
}