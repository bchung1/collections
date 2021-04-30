import styled from 'styled-components';
import Image from 'next/Image';

const Container = styled.div`
    display: flex;
    align-items: stretch;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.gray2};
    padding: 1rem 2rem;
    width: 600px;
    margin: 1.5rem;
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`
const StyledImage = styled(Image)`
    border-radius: 4px;
    object-fit: cover;
    margin-right: 20rem;
`

const CardText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 3rem;

    .title {
        font-size: 1.4rem;
        font-weight: 500;
        margin-bottom: 0.8rem;
    }

    .subtitle {
        font-weight: 300;
        font-size: 1rem;
    }
`

export default function Card({src, title, subtitle = null}) {
    return (
        <Container>
            <StyledImage
                src={src}
                width={150}
                height={150}
            />
            <CardText>
                <div className="title">{title}</div>
                <div className="subtitle">{subtitle}</div>
            </CardText>
        </Container>
    )
}

Card.defaultProps = {
    subtitle: ''
}