import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import Form from './pages/formulario';
// import MorePags from './pages/maisPaginas';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path='/formulario' element={<Form/>}/>
            </Routes>
        </BrowserRouter>
    );
}
