import React, { useEffect, Suspense } from "react";
import "./App.scss";
import "./i18n";
// import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { history } from "./_helpers";
import { alertActions } from "./_actions";
import Page404 from "./components/Page404/Page404";
import Login from "./containers/Login/Login";
import LoginTab from "./containers/Login/LoginTab";
import PrivateRoute from './containers/Login/PrivateRoute';
import { ToastContainer, toast } from 'react-toastify';



import ProductList from "./containers/Dashboard/ConwoodProductMaster/ProductList";
import StoreList from "./containers/Dashboard/ConwoodProductMaster/StoreList";
import AssignList from "./containers/Dashboard/ConwoodProductMaster/AssignList";
import AssignStore from "./containers/Dashboard/ConwoodProductMaster/AssignStore";
import UserInfo from "./containers/Dashboard/ConwoodProductMaster/UserInfo";
import Dashboard from "./containers/Dashboard/Dashboard";


// masters 16-08-2021


function App() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);

  return (
    <div className="">
      <Suspense fallback={null}>
        {/* <LanguageSelector /> */}
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/Dashboard" exact component={Dashboard} />       
            <PrivateRoute path = "/ProductList" exact component={ProductList}/>
            <PrivateRoute path = "/StoreList" exact component={StoreList}/>
            <PrivateRoute path = "/AssignList" exact component={AssignList}/>
            <PrivateRoute path = "/AssignStore" exact component={AssignStore}/>
            <PrivateRoute path = "/UserInfo" exact component={UserInfo}/>
            {/* 16-08-2021 */}
         
         
            
            
            <Route component={Page404} />
          </Switch>
        </Router>
        
      </Suspense>
      <ToastContainer />
    </div>

  );
}

export { App };
