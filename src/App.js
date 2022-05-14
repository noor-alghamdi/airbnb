import './App.css';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import SearchPage from './components/SearchPage/SearchPage'
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'






function App() {
  return (
    <div className="App">
    <Router>
        <Header />
        <Routes>
          <Route  exact path="/search" element={<SearchPage />}/>
            
          <Route  exact path="/" element={<Home />}/>
          
          
        </Routes>
        
        <Footer />
      </Router>
    
    

    </div>
  );
}

export default App;
