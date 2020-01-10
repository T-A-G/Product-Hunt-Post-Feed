import React, {Fragment} from 'react';
import Loader from 'react-loader-spinner'

import User1 from '../../assets/user1.jpg'
import User2 from '../../assets/user2.jpg'
import User3 from '../../assets/user3.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment} from '@fortawesome/free-regular-svg-icons'
import { faArrowUp,faAngleRight  } from '@fortawesome/free-solid-svg-icons'

import styled from '@emotion/styled'


const SidebarContainer = styled.div`
width: 32%;
display: flex;
flex-direction: column;
align-items: center;
margin: 30px;

@media (max-width: 1190px ) {
  width: 35%;
  }

@media (max-width: 850px) {
  display: none;
  }
`


const SidebarContent = styled.div`
margin: auto;
width: 100%;
display: flex;
flex-direction: column;
border-radius: 3px;
background-color: white;
box-shadow:  0 0 5px #77BA99;
margin: 20px;

&:first-child {
margin-top: 0px;
}
`

const SidebarHeader = styled.div`
padding: 15px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
border-bottom: 2px solid #e6ecf0;
`

const SidebarUserAvatar = styled.img`
border-radius: 25px;
height: 45px;
width: 45px;
object-fit: cover;
`

const SidebarUserIdentification = styled.div`
margin-left: 10px;
display: flex;
flex-direction: column;
`

const SidebarUserName = styled.div`
font-size: 14px;
`

const SidebarUserHandle = styled.div`
font-size: 14px;
color: #657786;
&:before{
  content: "\u0040";
}
`

const SidebarBody = styled.div`
font-size: 14px;
padding: 15px;
`


const SidebarStatisctics = styled.div`
display: flex;
flex-direction: row;
font-size: 14px;
padding: 10px 15px;
`

const SidebarStatisctic = styled.div`
color: #657786;
min-width: 55px;
>svg{
  margin-right: 8px;
}
`

const Sidebar = () => {
  return(
    <SidebarContainer>

      <SidebarContent>

        <SidebarHeader>
          <SidebarUserAvatar src={User1} />

          <SidebarUserIdentification>
            <SidebarUserName>Tess Testington</SidebarUserName>
            <SidebarUserHandle>Tess Testington</SidebarUserHandle>
          </SidebarUserIdentification>
        </SidebarHeader>

        <SidebarBody>
          Can't believe how amazing this site looks! Best site ever 🤙🏼
        </SidebarBody>
        <SidebarStatisctics>

          <SidebarStatisctic>
            <FontAwesomeIcon icon={faArrowUp} />
            <span>{10}</span>
          </SidebarStatisctic>

          <SidebarStatisctic>
            <FontAwesomeIcon icon={faComment} />
            <span>{6}</span>
          </SidebarStatisctic>

        </SidebarStatisctics>
      </SidebarContent>

      <SidebarContent>

        <SidebarHeader>
          <SidebarUserAvatar src={User2} />

          <SidebarUserIdentification>
            <SidebarUserName>Tom Trivia</SidebarUserName>
            <SidebarUserHandle>Tom_Trivia_123</SidebarUserHandle>
          </SidebarUserIdentification>
        </SidebarHeader>

        <SidebarBody>
          I wish I was just half as amazing as the developer of this site! If I was hiring I would totally give him the job! 👨🏻‍💻🔥
        </SidebarBody>
        <SidebarStatisctics>

          <SidebarStatisctic>
            <FontAwesomeIcon icon={faArrowUp} />
            <span>{4}</span>
          </SidebarStatisctic>

          <SidebarStatisctic>
            <FontAwesomeIcon icon={faComment} />
            <span>{2}</span>
          </SidebarStatisctic>

        </SidebarStatisctics>
      </SidebarContent>

      <SidebarContent>

        <SidebarHeader>
          <SidebarUserAvatar src={User3} />

          <SidebarUserIdentification>
            <SidebarUserName>Stacey Staged</SidebarUserName>
            <SidebarUserHandle>92_Staged_Stacey</SidebarUserHandle>
          </SidebarUserIdentification>
        </SidebarHeader>

        <SidebarBody>
          🤔 I wonder how one becomes such an amazing developer? 🤔
        </SidebarBody>
        <SidebarStatisctics>

          <SidebarStatisctic>
            <FontAwesomeIcon icon={faArrowUp} />
            <span>{13}</span>
          </SidebarStatisctic>

          <SidebarStatisctic>
            <FontAwesomeIcon icon={faComment} />
            <span>{3}</span>
          </SidebarStatisctic>

        </SidebarStatisctics>
      </SidebarContent>

    </SidebarContainer>
  )
}

export default Sidebar
