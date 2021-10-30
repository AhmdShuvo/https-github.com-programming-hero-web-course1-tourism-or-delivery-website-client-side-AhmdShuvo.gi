import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Details from './Components/Details/Details';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import WhiteList from './Components/MyWhiteList/WhiteList';
import NotFound from './Components/NotFound/NotFound';
import Places from './Components/Places/Places';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './Contexts/AuthProvider';


import Login from './Login/Login';

const App = () => {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Header></Header>
         <Switch>
           <Route exact path="/">
             <Home></Home>
           </Route>
           <Route exact path="/home">
             <Home></Home>
           </Route>
           <Route  path="/places">
             <Places></Places>
           </Route>
           <PrivateRoute path="/order/:email">
             <WhiteList></WhiteList>
           </PrivateRoute>
           <PrivateRoute path="/place/:placeId">
             <Details></Details>
           </PrivateRoute>
           <Route exact path="/register" >
             <Login></Login>
           </Route>

           <Route exact path="/*">
             <NotFound></NotFound>

           </Route>
          </Switch>
         <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
