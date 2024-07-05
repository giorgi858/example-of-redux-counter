import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from "./app/store"
import { Provider } from 'react-redux';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { fetchUsers } from './features/users/usersSlice';

store.dispatch(fetchUsers())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App/>} />
      </Routes>
    </BrowserRouter>
  </Provider>
  
);
