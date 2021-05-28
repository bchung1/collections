import styled from 'styled-components'
import { MenuItems } from './MenuItems'
import Nav from './Nav'
import NavLink from './NavLink'
import NavMenu from './NavMenu'
import { Button } from '../Buttons'

const LogoLink = styled(NavLink)`
  font-size: 1.5rem;
  padding: 0;
`

export default function Navbar() {
    
    const auth = <Button>Sign in</Button>

    return (
        <Nav>
            <LogoLink href="/" name="Collections" />
            <NavMenu>
                {
                    MenuItems.map(item => {
                        return <NavLink href={item.url} name={item.title} key={item.title} />
                    })
                }
                { auth }
            </NavMenu>
        </Nav>
    )
}