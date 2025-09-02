import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from '@/contexts/ThemeProvider';
import Home from './pages/Home';
import About from './pages/About';
import Tutorial from './pages/Tutorial';
import Templates from './pages/Templates';
import DynamicTemplate from './pages/DynamicTemplate';

export default function App() {

    return (
        <BrowserRouter>
            <ThemeProvider>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/tutorial' element={<Tutorial />} />
                    <Route path='/templates' element={<Templates />} />
                    <Route path='/template/:id' element={<DynamicTemplate />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}