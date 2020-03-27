import React, {Component} from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user-actions';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';  
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up';
import {auth, createUserProfileDocument} from './firebase/firebase';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(userAuth => {
      console.log(userAuth)
      if (userAuth) {
        setTimeout(() => {
          createUserProfileDocument(userAuth).onSnapshot(snapShot => {
            setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
            })
          })
        }, 500);
      } else {
        setCurrentUser(userAuth); 
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
    <div>
      <Header  />
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      <Route 
        exact path='/signin' 
        render={() => (
          this.props.currentUser ?
          <Redirect to='/' />
          : <SignInSignUp />
        )}
      />
      </Switch>
    </div>
    );
  }
}

const mapStateToProps = ({user}) => {
  return {
    currentUser: user.currentUser
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
