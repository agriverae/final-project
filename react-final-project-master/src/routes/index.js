import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainView from './mainView/mainView';
import HomeView from './homeView/homeView';
import AboutView from './aboutView/aboutView';
import { Provider } from 'react-redux';
import store from '../store/store'

const getRoutes = function() {
    return (
        <Provider store={store}>
            <div>
                <Route name="Main" component={MainView} />
                <Switch>
                    <Route exact path="/" component={HomeView} />
                    <Route path="/about" component={AboutView} />
                </Switch>
            </div>
        </Provider>
    )
};

export default getRoutes;
