import './App.css';
import Home from './Pages/Home'
import Introduction from './Pages/Introduction'
import Chapter from './Pages/Chapter';
import Footer from './Components/Footer'
import chapters from './chapters.json'
import { FiMenu } from 'react-icons/fi'
import { Route, Routes, NavLink } from 'react-router-dom'

export default function App() {
    return (
        <div className={window.innerWidth > 700 ? "app expand-menu" : "app"}>
            <header className={"app-header"}>
                <NavLink to="/">
                    <h2>DrumMastery.net</h2>
                </NavLink>
                <button onClick={() => {
                    const app = document.querySelector('.app')
                    app.classList.contains('expand-menu') ? app.classList.remove('expand-menu') : app.classList.add('expand-menu')
                }}>
                    <FiMenu />
                </button>
            </header>
            <div className="app-body">
                <nav>
                    <NavLink to="/introduction">Introduction</NavLink>
                    {chapters.map((chapter, i) => 
                        <NavLink key={i} to={chapter.link}>{chapter.name}</NavLink>
                    )}
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/introduction" element={<Introduction />} />
                    {chapters.map((chapter, i) => 
                        <Route key={i} path={chapter.link} element={<Chapter value={chapter} />} 
                        />
                    )}
                </Routes>
            </div>
            <Footer />
        </div>
    );
}