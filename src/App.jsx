import React from 'react';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from 'apollo-link-context'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './containers/home'


const httpLink = createHttpLink({
  uri: 'https://api.producthunt.com/v2/api/graphql'
});

const authLink = setContext((_, { headers }) => {

  const token = process.env.REACT_APP_ACCESS_TOKEN
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Home />
    </ApolloProvider>



  );
}

export default App;
