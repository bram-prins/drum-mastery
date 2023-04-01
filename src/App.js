import './App.css';
import Home from './Pages/Home'
import Introduction from './Pages/Introduction'
import ExercisePage from './Pages/ExercisePage';
import Footer from './Components/Footer'
import { Route, Routes, NavLink } from 'react-router-dom'

export default function App() {
    return (
        <div className="app">
            <header className="app-header">
                <NavLink to="/">
                    <h1>DrumMastery.net</h1>
                </NavLink>
            </header>
            <div className="app-body">
                <nav>
                    <NavLink to="/introduction">Introduction</NavLink>
                    <NavLink to="/beats1">Beats 1</NavLink>
                </nav>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/introduction" element={<Introduction />} />
                        <Route path="/beats1" element={<ExercisePage />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </div>
    );
}