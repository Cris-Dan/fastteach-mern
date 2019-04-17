import React from 'react';
import { render } from 'react-dom';
import './styles/styles.css';
import AppRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';


render(
    <BrowserRouter>
        <AppRoutes>
        </AppRoutes>
    </BrowserRouter>
    , document.getElementById('root'));


