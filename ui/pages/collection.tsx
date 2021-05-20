import styled from 'styled-components';
import Image from 'next/Image';
import Card from '../components/Card';

const StyledImage = styled(Image)`
    border-radius: 50%;
    object-fit: cover;
`

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 500;
    font-style: italic;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4rem 0 4rem 0;
`;

const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export default function Collection(){
    return (
        <Container>
            <Profile>
                <StyledImage
                    src="/images/profile.jpg"
                    width={150}
                    height={150}
                />
                <h3>@username</h3>
                <Title>Summer Collection</Title>
                <Card
                    src="/images/profile.jpg"
                    title="Random title"
                    subtitle="Random subtitle"
                />
                <Card
                    src="/images/profile.jpg"
                    title="Random title"
                    subtitle="Random subtitle"
                />
                <Card
                    src="/images/profile.jpg"
                    title="Random title"
                    subtitle="Random subtitle"
                />
                <Card
                    src="/images/profile.jpg"
                    title="Random title"
                    subtitle="Random subtitle"
                />
            </Profile>
        </Container>
    )
}