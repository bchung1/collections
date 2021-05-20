import styled from 'styled-components'
import { MenuItems } from './MenuItems'
import Nav from './Nav'
import NavLink from './NavLink'
import NavMenu from './NavMenu'
import { NavBtnLink, InverseNavBtnLink } from './NavBtnLink'
import { Button } from '../Buttons'
import {
    useSession, signIn, signOut
  } from 'next-auth/client'

const LogoLink = styled(NavLink)`
  font-size: 1.5rem;
  padding: 0;
`

export default function Navbar() {
    const [ session, loading ] = useSession()
    
    const auth = (session) ? <Button onClick={() => signOut()}>Sign out</Button> : <Button onClick={() => signIn()}>Sign in</Button>

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