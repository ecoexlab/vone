import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class OrderStep extends Component {

    renderField(field){
        return (
            <div>
                <label>{field.label}</label>
                <input type={field.type} {...field.input}/>
            </div>
        )
    }

    render(){
        return (
            <div>
                <Field label="Label" name="label" component={this.renderField} />
                <Field label="Label2" name="label2" component="select">
                    <option></option>
                    <option>Option1</option>
                    <option>Option2</option>
                    <option>Option</option>
                </Field>
            </div>
        )
    }
}

export default OrderStep