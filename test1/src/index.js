import React from 'react';
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {ChakraProvider} from '@chakra-ui/react'
import StoreProvider from './components/context/Corzine';
import AppRoutes from './components/App/Routes/Routes';
import Header from './components/App/Header/Header';



createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <React.StrictMode>
  <ChakraProvider>
    <StoreProvider>
    <Header/>
    <AppRoutes/>
    </StoreProvider>
  </ChakraProvider>
  </React.StrictMode>
  </BrowserRouter>
);


