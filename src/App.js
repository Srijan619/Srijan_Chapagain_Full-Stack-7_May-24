import React from 'react';
import Cards from '../src/components/Cards'
import UserDetails from '../src/components/UserDetails'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
function App() {
  return (

    <Router>
      <div >
        <Switch>
          <Route exact path='/' component={Cards}></Route>
          <Route exact path='/users/:id' component={UserDetails}></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
