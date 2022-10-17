import React from 'react';
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./components/Account";
import ProtectedRoute from "./components/ProtectedRoute";

import { AuthContextProvider } from "./context/AuthContext";
import SingUp from './components/SingUp';
import SingIn from './components/SingIn';

const App = () => {
  return (
 


      <div>
        <h1 className='text-center text-3xl font-bold'>
          Firebase Auth & Context
        </h1>
        <AuthContextProvider>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<SingUp />} />
            <Route path='/signIn' element={< SingIn/>} />
            <Route
              path='/account'
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
          </Routes>
          </BrowserRouter>
        </AuthContextProvider>
        
      </div>
  
  );
};

export default App;

