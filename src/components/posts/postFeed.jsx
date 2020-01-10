import React, {Fragment} from 'react';
import Loader from 'react-loader-spinner'

import PostPreview from './postPreview'
import styled from '@emotion/styled'

import Dropdown from 'react-bootstrap/Dropdown';
import {css } from '@emotion/core'

const PostFeedContainer = styled.div`
display: flex;
flex-direction: column;
box-shadow:  0 0 5px #77BA99;
width: 60%;
height: fit-content;
margin: 30px 3%;
background-color: white;
@media (max-width: 1190px) {
  width: 59%;
}
@media (max-width: 850px) {
  width: 100%;
}
`

const PostFeedHeader = styled.div`
padding: 15px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
border-bottom: 2px solid #e6ecf0;
`

const PostFeedHeaderTitle = styled.div`
color: #77BA99;
font-size: 18px;
font-weight: bold;
`

const PostFeedHeaderFilter = styled.div`
color: #77BA99;
font-size: 18px;
font-weight: bold;

.dropdown-menu{
  left: -60px !important;
}

.dropdown button{
  color:  #77BA99;
  background-color: white;
  border-color: white;
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

`

const PostFeed = ({posts, error,timeFilter,setTimeFilter}) => {

  return(
    <PostFeedContainer>

      <PostFeedHeader>
        <PostFeedHeaderTitle>
          Posts
        </PostFeedHeaderTitle>

        <PostFeedHeaderFilter>
          <Dropdown>
            <Dropdown.Toggle>
              All Time
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onSelect={() => setTimeFilter('All Time')}>All Time</Dropdown.Item>
              <Dropdown.Item onSelect={() => setTimeFilter('Today')}>Today</Dropdown.Item>
              <Dropdown.Item onSelect={() => setTimeFilter('This Week')}>This Week</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </PostFeedHeaderFilter>
      </PostFeedHeader>


      {error && <div>The following error occured: {error.message}</div>}

      {posts &&
        <Fragment>
          {posts.map(post => {
            return <PostPreview key={post.node.name} postInfo={post.node}/>
          })}

        </Fragment>
      }

    </PostFeedContainer>
  )
}

export default PostFeed
