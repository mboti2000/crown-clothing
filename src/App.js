import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInPage from './pages/sign-in/SignInPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {signIn, signOut} from './redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

function App() {
  const auth = getAuth();
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(state => state.user.currentUser);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(signIn(user));
        history.push('/');
      } else {
        dispatch(signOut());
        history.push('/signin');
    }});

   
  return (
    <div className="App">
      <Header />
      <Switch>    
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/signin" render={() => currentUser ? <Redirect to="/" /> : <SignInPage />} />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
}

export default App;
