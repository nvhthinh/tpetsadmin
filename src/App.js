import React, { Component } from "react";
import logo from './logo.svg';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Form from './components/common/form'

import Login from './components/login'


function App() {
    return (
        
    <Router>
        
       <Switch>
            <Route path="/dangnhap">
                <Login />
            </Route>
            <Route path="/">
                <Form/>
            </Route>
        </Switch>
               
        <script src="vendor/jquery/jquery.min.js" type="text/javascript"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js" type="text/javascript"></script>

        
        <script src="vendor/jquery-easing/jquery.easing.min.js" type="text/javascript"></script>

        
        <script src="js/sb-admin-2.min.js" type="text/javascript"></script>

        
        <script src="vendor/chart.js/Chart.min.js" type="text/javascript"></script>

       
        <script src="js/demo/chart-pie-demo.js" type="text/javascript"></script>
       
        <script src="js/demo/chart-bar-demo.js" type="text/javascript"></script>
    </Router>
    );
}

export default App;