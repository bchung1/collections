import styled from 'styled-components'
import Link from 'next/Link'

export const StyledLink = styled.div`
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 1rem;

    &:hover {
    color: ${props => props.theme.primaryColor};
    }
`

interface Props {
    href?: string | undefined,
    name: string,
    className?: string
}

export default function NavLink({ href, name, className}: Props) {
    return (
    <StyledLink className={className}>
        <Link href={href} passHref>
            {name}
        </Link>
    </StyledLink>
    )
}