import React from 'react'
import { Nav, Logo, Hamburger, MenuLink, Menu} from './NavbarStyles'

const Navbar = () => {
    return (
        <Nav>
            <Logo to="/">
                <i>{"<Clarusway>"}</i><span>recipe</span>
            </Logo>

            <Hamburger>
                <span/>
                <span/>
                <span/>
            </Hamburger>

            <Menu>
                <MenuLink to="/about">About</MenuLink>
                <MenuLink to={{pathname:"https://github.com/orgs/clarusway/dashboard"}}>Github</MenuLink>
                <MenuLink to="/login">Logout</MenuLink>
            </Menu>
        </Nav>
    )
}

export default Navbar
