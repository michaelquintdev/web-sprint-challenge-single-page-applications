import React from 'react';

export default function Form(props){
    const {values, update, submit} = props;

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        update(name, valueToUse);
    }
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        // Constructing the form
        <form id = 'pizza-form' onSubmit={onSubmit}>
            <div className = 'form-container'>
                <h2>Form to get Lambda Pizza!</h2>
                <label>
                    Name
                    <input 
                        id = 'name-input'
                        value = {values.name}
                        onChange = {onChange}
                        name = 'name'
                        type = 'text'
                    />
                </label>
                <label>
                    Size of Pizza:
                    <select name = 'size' value = {values.size} onChange = {onChange}>
                        <option value = ''>Select a size</option>
                        <option value = 'Small'>Small</option>
                        <option value = 'Medium'>Medium</option>
                        <option value = 'Large'>Large</option>
                    </select>
                </label>
                <div className = 'checkboxes'>
                    <h3>Toppings</h3>
                    <label>
                        Pineapple
                        <input
                            checked = {values.pineapple}
                            onChange = {onChange}
                            name = 'pineapple'
                            type = 'checkbox'
                        />
                    </label>
                    <label>
                        <br></br>   
                        Solid Concrete
                        <input 
                            checked = {values.concrete}
                            onChange = {onChange}
                            name = 'concrete'
                            type = 'checkbox'
                        />
                    </label>
                    <label>
                        <br></br>
                        Drywall
                        <input
                            checked = {values.drywall}
                            onChange = {onChange}
                            name = 'drywall'
                            type = 'checkbox'
                        />
                    </label>
                    <label>
                        <br></br>
                        Straight Hydrochloric Acid
                        <input
                            checked = {values.acid}
                            onChange = {onChange}
                            name = 'acid'
                            type = 'checkbox'
                        />
                    </label>
                    <label>
                        <br></br>
                        <br></br>
                        <br></br>
                        Any special Instructions for delivery?
                        <br></br>
                    <input 
                        id = 'special-text'
                        value = {values.special}
                        onChange = {onChange}
                        name = 'special'
                        type = 'text'
                    />
                </label>
                </div>
            </div>
            <button id = 'order-button'>Submit Order Here</button>
        </form>
    );
}