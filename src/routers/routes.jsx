import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import { ThreadPage } from '../pages/ThreadPage';
import { ThreadContentPage } from '../pages/ThreadContentPage';
import { ThreadContent } from '../components/threads/ThreadContent'

export function MyRoutes(){
    return (
        <Routes>
            <Route path='/' element={<ThreadPage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/thread1' element={<ThreadContentPage/>}/>
        </Routes>
    );
}