import './App.css';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
// import Banner from './components/Banner/Banner'
import Search from './components/Search/Search'
import SearchPage from './components/SearchPage/SearchPage'
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Switch, Rout} from 'react-router-dom'





function App() {
  return (
    <div className="App">
    <Router>

    <Header />
    <Switch>
    <Rout path="/">
    <Home />
    </Rout>
    <Rout path="search">
    <SearchPage />
    </Rout>
    </Switch>


    <Footer />
    
    
    </Router>

    </div>
  );
}

export default App;
