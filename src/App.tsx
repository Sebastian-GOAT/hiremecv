import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ThemeProvider from '@/contexts/ThemeProvider';
import CVDataProvider from './contexts/CVDataProvider';
import PreviewRefProvider from './contexts/PreviewRefProvider';

import Home from './pages/Home';
import About from './pages/About';
import Tutorial from './pages/Tutorial';
import Templates from './pages/Templates';
import DynamicTemplate from './pages/DynamicTemplate';

export default function App() {

    return (
        <BrowserRouter>
            <CVDataProvider>
                <PreviewRefProvider>
                    <ThemeProvider>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/tutorial' element={<Tutorial />} />
                            <Route path='/templates' element={<Templates />} />
                            <Route path='/template/:id' element={<DynamicTemplate />} />
                        </Routes>
                    </ThemeProvider>
                </PreviewRefProvider>
            </CVDataProvider>
        </BrowserRouter>
    );
}