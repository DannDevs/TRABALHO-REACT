
import './App.css';
import Footer from './components/footer/index';
import Skins from './skins';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Button from  './components/btns/index'



function App() {
  
    return (
      <>
       <BrowserRouter>
       <Routes>
          <Route path="/" exact element={
            <div id="center">
              <div id="game">
                <img src="assets/s.png" />
                <Link id='title-game' to="/skins">
                  <Button />
                </Link>
              </div>
            </div>
          } />
          <Route path="/skins" element={<Skins />} />
        </Routes>
      <nav id="footer"> <Footer /> </nav>
    </BrowserRouter>
      </>
    );
  

}

export default App;