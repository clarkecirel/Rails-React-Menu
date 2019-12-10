import React from 'react';
import MenuForm from './components/MenuForm';
import MenuList from './components/MenuList';
import { Container } from 'semantic-ui-react';

class App extends React.Component {
  state = { 
    menus: [{name: 'Breakfast'}],
    items: [],
   }

  render() {
    return (
      <Container style={{ padding: "30px 0", }}>
        <MenuForm/>
        <br />
        <br />
        <MenuList menus={ this.state.menus }/>
      </Container>
    );
  }
};

export default App;