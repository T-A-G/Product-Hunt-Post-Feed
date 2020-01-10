import React, {Fragment} from 'react';
import Loader from 'react-loader-spinner'
import Logo from '../../assets/logo.png'
import User4 from '../../assets/user4.jpg'
import Dropdown from 'react-bootstrap/Dropdown';
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faBars} from '@fortawesome/free-solid-svg-icons'


const NavbarContainer = styled.div`
z-index: 100000;
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



const MobileNavbarLinks = styled.div`

.dropdown button{
  font-size: 30px;
  color:  #77BA99;
  background-color: white;
  border-color: white;
}

.dropdown button:after{
  display: none !important;
}

.dropdown button:focus,
.dropdown button:hover,
.dropdown-toggle
{
  box-shadow: none !important;
  color:  #77BA99 !important;
  background-color: white !important;
  border-color: white !important;
}

.dropdown-item{
  color:#657786;
}
.dropdown-item:hover{
  color:white !important;
  background-color:  #77BA99 !important;

}

@media (min-width: 731px) {
  display: none;
}
`

const NavbarLinks = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
@media (max-width: 730px) {
  display: none;
}
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
border-radius: 35px;
width: 70px;
height: auto;
padding: 10px;
object-fit: cover;
`
const SearchBar = styled.div`
width: 300px;
display: flex;
@media (max-width: 448px) {
  width: 140px;
}
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
@media (max-width: 448px) {
  width: 100px;
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

        <MobileNavbarLinks>

        <Dropdown>
          <Dropdown.Toggle>
            <FontAwesomeIcon icon={faBars} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onSelect={() => alert('Clicked About Page')}>About</Dropdown.Item>
            <Dropdown.Item onSelect={() => alert('Clicked Contact Page')}>Contact</Dropdown.Item>
            <Dropdown.Item onSelect={() => alert(' Clicked My Account Page')}>My Account</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </MobileNavbarLinks>

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
