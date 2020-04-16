import React, {useEffect, lazy, Suspense} from 'react';
import {GlobalStyle} from './global-style';
import {Switch, Route, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user-selectors';
import {checkUserSession} from './redux/user/user-actions';

import Header from './components/header/header';  
import LoadingSpinner from './components/loading-spinner/loading-spinner';
import ErrorBoundary from './components/error-boundary/error-boundary';

const Homepage = lazy(() => import('./pages/homepage/homepage'));
const ShopPage = lazy(() => import('./pages/shop/shop'));
const SignInSignUp = lazy(() => import('./pages/sign-in-sign-up/sign-in-sign-up'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout'));


const App = ({checkUserSession, currentUser}) => {
  useEffect(() => {checkUserSession()}, [checkUserSession]);

  return (
  <div>
    <GlobalStyle />
    <Header />
    <Switch>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact path='/signin'
            render={() => (
              currentUser ? <Redirect to='/' /> : <SignInSignUp />
            )}
          />
        </Suspense>
      </ErrorBoundary>  
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
