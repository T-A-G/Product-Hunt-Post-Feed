import React, {Fragment, useState, useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import Loader from 'react-loader-spinner'
import * as _ from 'lodash'
import parseISO from 'date-fns/parseISO'
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'

import * as queries from '../../queries'

import Navbar from '../../components/navbar/navbar'
import Sidebar from '../../components/sidebar/sidebar'
import PostFeed from '../../components/posts/postFeed'


const GlobalStyle = <Global
  styles={css`
    body {
      font-family: "Helvetica Neue";
      background-color: #dbffee70;
    }
    `
  }
  />


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

  //apply time based filter
  const filterPostsByTime = (data) => {
    if(!data) return
    const edges = _.filter(data.posts.edges, post => {

      const createdDate = parseISO(post.node.createdAt)
      const daysBetween = differenceInCalendarDays(createdDate,new Date())

      switch (timeFilter){

        case "Today":
        return daysBetween === 0
        break;

        case "This Week":
        return daysBetween <= 6
        break;

        default:
        return true
        break;

      }

    })
    return (
      {
        posts:{
          __typename: data.posts.__typename,
          pageInfo: data.posts.pageInfo,
          edges: edges,
        }
      }
    )
  }

  //hook to load more posts when users scrolls to the bottom of the page
  useBottomScrollListener(() => fetchMorePosts(error ? null : data.posts.pageInfo.endCursor));

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

  const filteredData = filterPostsByTime(data)

  const posts = filteredData ? filteredData.posts.edges : null

  //render
  return (
    <HomeContainer>
      {GlobalStyle}
      <Navbar/>
      <HomeContent>
        {<PostFeed posts={posts} error={error} timeFilter={timeFilter} setTimeFilter={setTimeFilter}/>}
        <Sidebar/>
      </HomeContent>
    </HomeContainer>
  )
}

export default Home
