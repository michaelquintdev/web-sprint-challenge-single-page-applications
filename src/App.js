import React, {useState} from "react";
import {Route, Link, Switch} from 'react-router-dom';
import Form from './components/Form.js';
import Home from './components/Home.js';


// Setting initial form Values
const initialFormValues = {
    name: '',
    size: '',
    pineapple: false,
    concrete: false,
    drywall: false,
    acid: false,
    special: '',
}

const App = () => {
  const [pizzas, setPizzas] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }
  const submitForm = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      special: formValues.special.trim(),
      toppings: ['pineapple', 'drywall', 'concrete', 'acid'].filter((topping) => 
        formValues[topping]
      ),
    }
    setPizzas([...pizzas, newPizza]);
    setFormValues(initialFormValues);
    console.log(pizzas);
  }

  return (
    <div className = 'homepage'>
      <div className = 'nav-links'>
        <Link to = '/'>Home</Link>
        <Link id = 'order-pizza' to = '/pizza'>Make Pizza</Link>
      </div>

    {/* Switch that will send you to different components */}
    <Switch>
      <Route path = '/pizza'>
        <Form id = 'pizza-form' values = {formValues} update = {updateForm} submit = {submitForm}/>
      </Route>
      <Route path = '/'>
        <Home />
      </Route>
    </Switch>
    </div>
  );
};
export default App;
