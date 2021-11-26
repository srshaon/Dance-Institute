// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DanceForms from './components/DanceForms/DanceForms';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import HallOfFame from './components/HallOfFame/HallOfFame';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
            
            <Route path='/danceforms'>
              <DanceForms></DanceForms>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/' >
              <Home></Home>
            </Route>
            <Route path='/about'>
              <AboutUs></AboutUs>
            </Route>
            <Route path='/halloffame'>
              <HallOfFame></HallOfFame>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
