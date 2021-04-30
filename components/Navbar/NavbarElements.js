import styled from 'styled-components'
import Link from 'next/Link'

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`

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

export function NavLink({ href, name, className}) {
    return (
      <StyledLink className={className}>
          <Link href={href} passHref>
            {name}
          </Link>
      </StyledLink>
    )
  }

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
`

export const NavBtnLink = styled(NavLink)`
  background-color: ${props => props.theme.primaryColor};
  color: #fff;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  border: 1px solid transparent;
  padding: 0.7rem 1rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${props => props.theme.primaryColor};
    background-color: #fff;
    border: 1px solid ${props => props.theme.primaryColor};
  }
`

export const LogoLink = styled(NavLink)`
  font-size: 1.5rem;
`

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`