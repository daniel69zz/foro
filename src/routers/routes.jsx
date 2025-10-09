import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import { ThreadPage } from '../pages/ThreadPage';
import { ThreadContentPage } from '../pages/ThreadContentPage';
import { ThreadContent } from '../components/threads/ThreadContent'

export function MyRoutes(){
    return (
        <Routes>
            <Route path='/' element={<ThreadPage tipo="c1"/>}/>
            <Route path='/development' element={<ThreadPage tipo="c2"/>}/>
            <Route path='/gaming' element={<ThreadPage tipo="c3"/>}/>
            <Route path='/general' element={<ThreadPage tipo="c4"/>}/>
            <Route path='/learning' element={<ThreadPage tipo="c5"/>}/>
            
        
            <Route path='/login' element={<Login/>}/>
            <Route path='/threads/:id' element={<ThreadContentPage/>}/>
        </Routes>
    );
}