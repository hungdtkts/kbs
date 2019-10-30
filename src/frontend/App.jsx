import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';

import HomePage from './scenes/HomePage/HomePage';

import BookList from './scenes/BookManagementPage/BookList/BookList';
import AddBookForm from './scenes/BookManagementPage/AddBookForm/AddBookForm';

import BookTypeList from './scenes/BookTypeManagementPage/BookTypeList/BookTypeList';
import AddBookTypeForm from './scenes/BookTypeManagementPage/AddBookTypeForm/AddBookTypeForm';

import './assests/styles/scss/styles.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return (  
            <Router>
                <div className="dashboard-page layout layout-grid layout-grid--gta-1 layout-grid--gtc-1 layout-grid--gap-10">
                    <Sidebar />

                    <Switch>
                        <Route path="/home" component={ HomePage } />

                        <Route path="/books" exact component={ BookList } />
                        <Route path="/books/add" component={ AddBookForm } />

                        <Route path="/bookTypes" exact component={ BookTypeList } />
                        <Route path="/bookTypes/add" component={ AddBookTypeForm } />
                    </Switch>
                </div>
            </Router>
        );
    }
}
 
export default App;