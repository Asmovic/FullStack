import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import * as actions from '../actions';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {

        const Dashboard = () => <h2>Dashboard</h2>;
        const newSurvey = () => <h2>newSurvey</h2>;

        return (
            <div className='container'>
                <Header />
                <BrowserRouter>
                    <Route path='/' exact component={Landing} />
                    <Route path='/surveys' exact component={Dashboard} />
                    <Route path='/surveys/new' component={newSurvey} />
                </BrowserRouter>
            </div>

        )

    }

}

export default connect(null, actions)(App);