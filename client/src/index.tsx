import * as React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';

import App from './App';

// const cache = new InMemoryCache();
// const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
//   cache,
//   link: new HttpLink({
//     uri: 'http://localhost:4000/graphql',
//     headers: {
//       authorization: localStorage.getItem('token'),
//       'client-name': 'Space Explorer [web]',
//       'client-version': '1.0.0',
//     },
//   }),
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <ApolloProvider client={client}>
  //   <App />
  // </ApolloProvider>,
  document.getElementById('root'),
);
