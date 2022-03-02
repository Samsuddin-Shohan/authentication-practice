import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import initializeFirebase from './Firebase/firebase.init';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Authentication from './Components/Authentication/Authentication';
import Authorization from './Components/Authorization/Authorization';
import Navbar from './Components/Navbar/Navbar';

initializeFirebase();



function App() {
  return (
    <div className='App'>
    
    <h1>Hello, Welcome to Firebase</h1>
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path='/authentication'>
           <Authentication></Authentication>
        </Route>
        <Route path='/authorization'>
          <Authorization></Authorization>
        </Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
