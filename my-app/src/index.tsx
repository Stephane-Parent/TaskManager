import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: 'http://localhost:4000/graphql' })]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
