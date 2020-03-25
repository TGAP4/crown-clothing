import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';  
import SignInPage from './pages/sign-in-page/sign-in-page';
import {auth} from './firebase/firebase'

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }
  
    unsubscribeFromAuth = null;
  
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
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
            <Route path='/signin' component={SignInPage} />
            </Switch>
        </div>
        );
    }
}

export default App;
