import React from 'react';
import { Form } from 'semantic-ui-react';

class MenuForm extends React.Component {
  state = { name: '' };

  render () {
    return (
    
      <Form>
        <Form.Input
        label= 'Menu'
        placeholder= 'Add a Menu'
        required
        value={this.state.name}
        onChange={this.handleChange}
        />
      </Form>

    )
  }
};

export default MenuForm;