import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Navbar:React.FC = () => {
  return (
    <Nav>
        <NavTitle>
            The Job
        </NavTitle>
        <NavLinks>
            <NavLink>
                <LoginButton>
                    Login
                </LoginButton>
            </NavLink>
            <NavLink>
               <SignUpButton>Sign Up</SignUpButton>
            </NavLink>
        </NavLinks>
    </Nav>
  )
}

const Nav = styled.nav`
    ${tw`
    w-full
    h-16
    flex
    justify-between
    items-center
    absolute
    `}
`
const NavTitle = styled.div`
    ${tw`
    p-16     
    text-4xl
    font-bold
    `}

`
const NavLinks= styled.div`
    ${tw`
    p-16     
    `}

`
const NavLink= styled.a`
    ${tw`
    p-1
    m-1
    `}

`
const SignUpButton = styled.button`

    background-color: #0d9488;
    
    ${tw`
    rounded-sm
    text-white
    p-1
    w-28
    font-bold
    `}
`
const LoginButton = styled.button`
    ${tw`
    rounded-sm
    p-1
    w-28
    font-bold
    `}
`

export default Navbar