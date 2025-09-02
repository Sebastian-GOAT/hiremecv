import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import Home from './pages/Home';
import About from './pages/About';
import Tutorial from './pages/Tutorial';
import Templates from './pages/Templates';

export default function App() {

    return (
        <BrowserRouter>
            <ThemeProvider attribute='class'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/tutorial' element={<Tutorial />} />
                    <Route path='/templates' element={<Templates />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}