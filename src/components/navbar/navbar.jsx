import React, {Fragment} from 'react';
import Loader from 'react-loader-spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import Logo from '../../assets/logo.png'
import User4 from '../../assets/user4.jpg'

import styled from '@emotion/styled'


const NavbarContainer = styled.div`
position: fixed;
top: 0px;
left: 0px;
width: 100%;
height: 70px;
background-color: white;
box-shadow:  0 0 5px #77BA99;
`

const NavbarContent = styled.div`
width: 100%;
max-width: 1130px;
margin: auto;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`


const BrandLogo = styled.img`
width: 70px;
height: auto;
padding: 10px;
`

const NavbarLinks = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

const NavbarLink = styled.a`
margin: 0px 5px;
color: #2C363F;
padding: 20px 5px;
padding-bottom: 28px;


&:hover{
  opacity: 0.8;
  cursor: pointer;
  border-bottom: 4px solid #77BA99;
  padding-bottom: 24px;

}
`
const NavbarAvatar = styled.img`
margin-left: 20px;
border-radius: 25px;
height: 50px;
width: 50px;
object-fit: cover;
`
const SearchBar = styled.div`
width: 300px;
display: flex;
`
const SearchBarIcon = styled.div`
border-radius: 20px 0px 0px 20px;
color: #657786;
border: 1px solid #a1d0b98a;
border-right:0px;
background-color: #efefef8a;
padding: 3px 10px;

`


const SearchBarInput = styled.input`
width: 250px;
border-radius: 0px 20px 20px 0px;
border: 1px solid #a1d0b98a;
border-left:0px;
background-color: #efefef8a;
font-size: 14px;
&:focus{
  outline: none;
}
`


const Navbar = () => {
  return(
    <NavbarContainer>
      <NavbarContent>
        <BrandLogo src={Logo}/>
        <SearchBar>
          <SearchBarIcon>
            <FontAwesomeIcon icon={faSearch} />
          </SearchBarIcon>
          <SearchBarInput type='text' placeholder='Search '/>
        </SearchBar>
        <NavbarLinks>
          <NavbarLink>About</NavbarLink>
          <NavbarLink>Contact</NavbarLink>
          <NavbarAvatar src={User4}/>
        </NavbarLinks>
      </NavbarContent>
    </NavbarContainer>
  )
}

export default Navbar
