import React, {Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment} from '@fortawesome/free-regular-svg-icons'
import { faArrowUp,faAngleRight  } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'

import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'

const PostContainer = styled.a`
background-color: white;
width: 650px;
text-decoration: none;
height: 90px;
border-bottom: 1px solid #e6ecf0;
border-top:none;
transition: 0.2s ease-in;
display: flex;
flex-direction: row;
color: #2C363F;

&:first-child {
  border-top: 1px solid #e6ecf0;
  border-radius: 3px 3px 0px 0px;
}
&:last-child {
  border-radius: 0px 0px 3px 3px;
}
&:hover{
  text-decoration: none;
  background-color: #f5f8fa;
}
`

const PostThumbnail = styled.img`
padding: 20px;
border-radius: 25px;
height: 60px;
width: 60px;
object-fit: cover;
`
const PostBody = styled.div`
padding: 10px;
display: flex;
flex-direction: column;
`

const PostTitle = styled.div`
display: flex;
flex-direction: row;
`

const PostName = styled.h4`
font-size: 16px;
margin: 0px 8px 0px 0px;
`

const PostCreator = styled.div`
color: #657786;
font-size: 14px;
margin: 2px 5px 0px 0px;
&:before{
  content: "\u0040";
}
`

const PostDate = styled.div`
color: #657786;
font-size: 14px;
margin: 2px 5px 0px 0px;
&:before{
  content: "\u2022";
  margin-right: 5px;
}
`

const PostDescription = styled.div`
margin-top: 5px;
font-size: 14px;
`

const PostStatisctics = styled.div`
display: flex;
flex-direction: row;
font-size: 14px;
`

const PostStatisctic = styled.div`
color: #657786;
min-width: 55px;
margin-top: 12px;
>svg{
  margin-right: 10px;
}
`

const PostArrow = styled.div`
width: 50px;
margin-left: auto;
justify-content: flex-end;
height: 100%;
display: flex;
align-items: center;
>svg{
  margin-right: 8px;
}
`

const PostPreview = ({postInfo}) => {

  return (
    <PostContainer href={postInfo.url}>
      <PostThumbnail src={postInfo.thumbnail.url}/>

      <PostBody>

        <PostTitle>
          <PostName>
            {postInfo.name}
          </PostName>
          <PostCreator>
            {postInfo.user.username}
          </PostCreator>

          <PostDate>
            {format(parseISO(postInfo.createdAt), 'MMM dd')}
          </PostDate>
        </PostTitle>

        <PostDescription>
          {postInfo.tagline}
        </PostDescription>

        <PostStatisctics>

          <PostStatisctic>
            <FontAwesomeIcon icon={faArrowUp} />
            <span>{postInfo.votesCount}</span>
          </PostStatisctic>

          <PostStatisctic>
            <FontAwesomeIcon icon={faComment} />
            <span>{postInfo.commentsCount}</span>
          </PostStatisctic>

        </PostStatisctics>

      </PostBody>

      <PostArrow>
        <FontAwesomeIcon icon={faAngleRight} />
      </PostArrow>

    </PostContainer>
  )
}

export default PostPreview
