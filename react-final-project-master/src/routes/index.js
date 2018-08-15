import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import Layout from './Layout/Layout'

const getRoutes = () => (
        <Provider store={store}>
            <Layout />
        </Provider>
);

export default getRoutes;
