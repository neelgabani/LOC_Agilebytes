import logo from './logo.svg';
import './App.css';
import BOOKLY from './components/BOOKLY';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import video from './components/video';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Preferenceform from './components/Preferenceform';
import Home from './components/Homepage'
import Video from './components/Video1';
import Note from './components/Note';
import CalendarPage from './components/CalendarPage';
// import App from '../../videosdk-rtc-react-sdk-example/src/App';
function App() {
  return (
    <div className="App">
      {/* <video/> */}
      {/* <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div> */}
      <BrowserRouter>    
        {/* Define individual routes using Route */}
        <Routes>
          <Route path='/' element={<Home/>}/>
        <Route path="/BOOKLY" element={<BOOKLY/>} />
        <Route path="/Preferenceform" element={<Preferenceform/>} />
        {/* <Route path="/App" element={ <App/>} /> */}
        <Route path="/video" element={<Video/>} />
        <Route path="/note" element={<Note/>}/>
        <Route path="/CalendarPage" element={<CalendarPage/>}/>
        {/* <Route path="/MainDash" component={MainDash} /> */}
        </Routes>
        {/* Define a "catch-all" route for 404 pages */}
        {/* <Route path='/'/> */}
    </BrowserRouter>
            {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}
export default App;
