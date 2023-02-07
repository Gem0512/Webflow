import {Routes, Route} from 'react-router-dom'
import Home from './components/js/home'
import Work from './components/js/work'
import Contact from './components/js/contact'
import './App.css';

function App() {
  return (
    <div className="app">
      <nav>
        <ul>
           <li>
           <a className='nan'  href="/">
           <img src="https://assets.website-files.com/5e457cdd6bf0d06897420d3a/5e457cdd6bf0d070d8420d48_stone-logo-beige.svg"></img>
           STONE
           </a>    
           </li>
           <li>
            <a className='nav' href="/">HOME</a>
           </li>
           <li>
            <a className='nav' href="/news">WORK</a>
           </li>
           <li>
            <a className='nav' href="/contact">CONTACT</a>
           </li>
           <li>
             <a href="https://www.facebook.com/thanh.ngoc512/">           <img className='nav-1' src="https://assets.website-files.com/5e457cdd6bf0d06897420d3a/5e457cdd6bf0d0781c420d40_facebook-icon2.svg"></img></a>
           </li>
           <li>
           <a href="/">           <img className='nav-2' src="https://assets.website-files.com/5e457cdd6bf0d06897420d3a/5e457cdd6bf0d0642f420d49_twitter-icon.svg"></img></a>
           </li>
        </ul>
      </nav>
    
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/news" element={<Work/>}/>
      <Route  path="/contact" element={<Contact/>}/>
    </Routes>
    </div>
  );
}

export default App;
