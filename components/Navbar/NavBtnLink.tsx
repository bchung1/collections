import styled from 'styled-components'
import NavLink from './NavLink'

export default styled(NavLink)`
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