import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';

export function MyRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
        </Routes>
    );
}