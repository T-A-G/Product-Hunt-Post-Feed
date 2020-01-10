import React, {Fragment, useState, useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import Loader from 'react-loader-spinner'


import * as queries from '../../queries'

import Navbar from '../../components/navbar/navbar'
import Sidebar from '../../components/sidebar/sidebar'
import PostFeed from '../../components/posts/postFeed'

const HomeContainer = styled.div`
margin: auto;
width: 100%;
max-width: 1190px;
`

const HomeContent = styled.div`
font-family: "Helvetica Neue";
margin-top: 70px;
display: flex;
flex-direction: row;
`

const LoadingContainer = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const Home = props => {

  const [timeFilter, setTimeFilter] = useState('All Time')

  const GlobalStyle = <Global
    styles={css`
      body {
        font-family: "Helvetica Neue";
        background-color: #dbffee70;
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
      `}
      />

    const { loading, error, data, fetchMore} = useQuery(queries.GET_POSTS, {
      notifyOnNetworkStatusChange: true
    });

    //load more posts function
    const fetchMorePosts = endCursor => {
      if(endCursor){
        fetchMore({
          query: queries.GET_POSTS,
          variables: { cursor: endCursor },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            return  fetchMoreResult.posts.edges.length ?
            {
              posts: {
                __typename: previousResult.posts.__typename,
                pageInfo: fetchMoreResult.posts.pageInfo,
                edges: [...previousResult.posts.edges, ...fetchMoreResult.posts.edges]
              }
            }
            : previousResult
          }
        })
      }
    }
    useBottomScrollListener(() => fetchMorePosts(error ? null : data.posts.pageInfo.endCursor));

    const filterPostsByTime = (data) => {
      return (
        {
          ...data
        }
      )
    }

    //loading
      if (!data && loading) {
      return (<HomeContainer>
        {GlobalStyle}
        <LoadingContainer>
          <Loader
            type="Bars"
            color="#77BA99"
            height={50}
            width={50}
            />
        </LoadingContainer>
      </HomeContainer>)
    }

    // if(data) data = filterPostsByTime(data)

    //render
    return (
      <HomeContainer>
        {GlobalStyle}
        <Navbar/>
        <HomeContent>
          {<PostFeed posts={error? null : data.posts.edges} error={error} timeFilter={timeFilter} setTimeFilter={setTimeFilter}/>}
          <Sidebar/>
        </HomeContent>
      </HomeContainer>
    )
  }

  export default Home
