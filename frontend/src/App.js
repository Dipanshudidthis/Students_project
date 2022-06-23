import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Forms/Login';
import Register from './components/Forms/Register';


function App() {
  return (
    <>
      <Router>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/login"><Login/></Route>
            <Route exact path="/register"><Register/></Route>
          </Switch>
        </Router>
    </>
  );
}

export default App;
