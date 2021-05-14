import styled from 'styled-components'
import NavLink from './NavLink'

export const NavBtnLink = styled(NavLink)`
  background-color: ${props => props.theme.primaryColor};
  color: #fff;
  border-radius: 4px;
  border: 1px solid transparent;
  padding: 0.7rem 1rem;

  &:hover {
    color: #fff;
  }
`

export const InverseNavBtnLink = styled(NavBtnLink)`
    background-color: #fff;
    color: ${props => props.theme.primaryColor};
    border: 1px solid ${props => props.theme.primaryColor};
    margin-right: 1rem;

    &:hover {
      color: ${props => props.theme.primaryColor};
    }
`