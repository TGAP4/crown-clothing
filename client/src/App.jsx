import React, {useEffect} from 'react';
import {GlobalStyle} from './global-style';
import {Switch, Route, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user-selectors';
import {checkUserSession} from './redux/user/user-actions';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up';
import CheckoutPage from './pages/checkout/checkout';
import Header from './components/header/header';  


const App = ({checkUserSession, currentUser}) => {
  useEffect(() => {checkUserSession()}, [checkUserSession]);

  return (
  <div>
    <GlobalStyle />
    <Header />
    <Switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/shop' component={ShopPage} />
    <Route exact path='/checkout' component={CheckoutPage} />
    <Route 
      exact path='/signin' 
      render={() => (
        currentUser ? <Redirect to='/' /> : <SignInSignUp />
      )}
    />
    </Switch>
  </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
