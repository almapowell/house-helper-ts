import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import styled from '@emotion/styled';
import App from './components/App';
import Home from './components/Home';
import AddProject from './components/AddProject';
import SearchListings from './components/SearchListings';
import Login from './components/Login';
import Footer from './components/Footer';
// import Assignments from './components/Assignments/connected';

const Layout = styled.div`
  padding-top: 72px;
  display: flex;
  flex-direction: column;
  min-height: 60vh;
`;

const Routes: React.FunctionComponent = () => {

    return (
    // <ConnectedRouter history={browserHistory}>
    <Router>
        <App />
        <Layout>
          <Switch>
            <Route path="/home" component={Home} exact />
            <Route path="/add-project" component={AddProject} />
            <Route path="/search-listings" component={SearchListings} />
            <Route path="/login" component={Login} />
          </Switch>
        </Layout>
        <Footer />
    </Router>
  );
};

export default Routes;
