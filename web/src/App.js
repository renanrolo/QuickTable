import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { tokenNotExists, urlToSign, autoLoginForDevelopment } from './services'
import Home from './pages/home'
import MenuTop from './components/menu-top'
import Footer from './components/footer'
import 'toastr/build/toastr.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';


const App = () => {

  useEffect(() => {

    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      autoLoginForDevelopment()
    }

    // if (tokenNotExists()) {
    //   window.location = urlToSign()
    // }
  }, []);

  //return <Home />

  return (
    <>

      <Router basename={process.env.PUBLIC_URL}>
      <MenuTop />
        <Switch>
          <Route path="/:table?" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  )

}


export default App;
