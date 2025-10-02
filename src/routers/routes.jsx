import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import { ThreadCard } from '../components/threads/ThreadCard';
import { ThreadPage } from '../pages/ThreadPage';

export function MyRoutes(){
    return (
        <Routes>
            <Route path='/' element={<ThreadPage/>}/>
        </Routes>
    );
}