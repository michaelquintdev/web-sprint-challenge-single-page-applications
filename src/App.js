import React from "react";
import {Route, Link, Switch} from 'react-router-dom';
import Form from './components/Form.js';
import Home from './components/Home.js';

const App = () => {
  return (
    <div className = 'homepage'>
      <div className = 'nav-links'>
        <Link to = '/'>Home</Link>
        <Link id = 'order-pizza' to = '/pizza'>Make Pizza</Link>
      </div>

    {/* Switch that will send you to different components */}
    <Switch>
      <Route path = '/pizza'>
        <Form id = 'pizza-form'/>
      </Route>
      <Route path = '/'>
        <Home />
      </Route>
    </Switch>
    </div>
  );
};
export default App;
