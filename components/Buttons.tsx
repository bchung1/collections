import styled from 'styled-components'
import Link from 'next/Link'

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

interface Props {
  href?: string | undefined,
  name: string,
  className?: string
}

export function ButtonLink({ href, name, className}: Props) {
    return (
      <Button className={className}>
          <Link href={href} passHref>
            {name}
          </Link>
      </Button>
    )
  }