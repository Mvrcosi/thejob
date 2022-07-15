import React from 'react';
import Dashboard from './components/Dashboard';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Home';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
    </ApolloProvider>
  );
}



export default App;
