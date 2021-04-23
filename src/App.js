import React, {useState, useEffect} from "react";
import {Route, Link, Switch} from 'react-router-dom';
import Form from './components/Form.js';
import Home from './components/Home.js';
import schema from './validation/formSchema.js';
import * as yup from "yup";
import axios from "axios";

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
const initialFormErrors = {
  name: '',
  size: '',
  special: '',
};
const initialDisabled = true;
const initialPizzas = [];


const App = () => {
  const [pizzas, setPizzas] = useState(initialPizzas)
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewPizza = (newPizza) => {
    console.log(newPizza);
    axios
      .post("https://reqres.in/api/orders", newPizza)
      .then((res) => {
        setPizzas([res.data, ...pizzas]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateForm = (inputName, inputValue) => {
    yup
      .reach(schema, inputName)
      .validate(inputValue)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [inputName]: '',
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [inputName]: err.errors[0],
        })
      });
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
    postNewPizza(newPizza);
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]); 

  return (
    <div className = 'homepage'>
      <div className = 'nav-links'>
        <Link to = '/'>Home</Link>
        <Link id = 'order-pizza' to = '/pizza'>Make Pizza</Link>
      </div>

    {/* Switch that will send you to different components */}
    <Switch>
      <Route path = '/pizza'>
        <Form 
          id = 'pizza-form' 
          values = {formValues} 
          update = {updateForm} 
          submit = {submitForm}
          errors = {formErrors}
          disabled = {disabled}
        />
      </Route>
      <Route path = '/'>
        <Home />
      </Route>
    </Switch>
    </div>
  );
};
export default App;
