import { MenuItems } from './MenuItems'
import { Nav, LogoLink, NavLink, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'
import { Button } from '../Buttons'

export default function Navbar() {
    return (
        <>
            <Nav>
                <LogoLink href="/home" name="Collections" />
                <NavMenu>
                    {
                        MenuItems.map(item => {
                            return <NavLink href={item.url} name={item.title} key={item.title} />
                        })
                    }
                    <NavBtn>
                        <NavBtnLink href="/signin" name="Sign In" />
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    )
}