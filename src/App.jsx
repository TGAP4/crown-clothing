import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';  
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up';
import {auth, createUserProfileDocument} from './firebase/firebase'

class App extends Component {
  constructor() {
    super();
    this.state = {
        currentUser: null
     }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        setTimeout(() => {
          createUserProfileDocument(userAuth).onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })
          })
        }, 500);
      } else {
        this.setState({currentUser: userAuth}); 
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
    );
  }
}

export default App;
