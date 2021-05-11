import styled from 'styled-components'
import { MenuItems } from './MenuItems'
import Nav from './Nav'
import NavLink from './NavLink'
import NavMenu from './NavMenu'
import NavBtnLink from './NavBtnLink'

const LogoLink = styled(NavLink)`
  font-size: 1.5rem;
`

export default function Navbar() {
    return (
        <Nav>
            <LogoLink href="/" name="Collections" />
            <NavMenu>
                {
                    MenuItems.map(item => {
                        return <NavLink href={item.url} name={item.title} key={item.title} />
                    })
                }
                <NavBtnLink href="/signin" name="Sign In" />
            </NavMenu>
        </Nav>
    )
}