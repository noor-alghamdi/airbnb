import './App.css';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
// import Banner from './components/Banner/Banner'
import Search from './components/Search/Search'
import SearchPage from './components/SearchPage/SearchPage'
import Footer from './components/Footer/Footer';





function App() {
  return (
    <div className="App">
    <Header />
    <Home />
    {/* <Search /> */}
    {/* <Banner /> */}
    {/* <Cards /> */}
    <Footer />
    <SearchPage />
      {/* Home */}
        {/* Header */}
          {/* Search */}
        {/* Banner */}
        {/* Cards */}
        {/* Footer */}

      {/* Search Page */}

    </div>
  );
}

export default App;
