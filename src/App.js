import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
    return (
        <BrowserRouter>
            <div
                className="App">
                <Header 
                    title={'VENERA'} />
                <Routes>
                    <Route 
                        path='/' 
                        element={<Home />} />
                    <Route 
                        path='/about' 
                        element={<About />} />
                    <Route 
                        path='/contact' 
                        element={<Contact />} />
                </Routes>
                <Footer 
                    title={'VENERA'} />
            </div>
        </BrowserRouter>
    );
}

export default App;