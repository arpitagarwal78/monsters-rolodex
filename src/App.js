import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


class App extends Component { // componet provide state and certain method like setState

  constructor() { // every class provides with the state that can be passed
    // this also provides certain methods eg setState to set state with the change value
    super();

    this.state = {
      monsters: [
       
      ],
      searchField: ''
    };

   // this.handleChange = this.handleChange.bind(this); // to bind the context for the function
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters : users }));
  } // when is component mount for the first time it calls whatever block inside it

  // {} is javacript expression
  // <dic className> it is JSX
  // this.state should be called as it wont rerender the change
  // since render is called on state change that is fone through method stateChange

  // handleChange(e) {
  //   this.setState({searchField: e.target.value})
  // }

  handleChange = (e) => { // arrow function directly bind the this [lexical scopinf helps in passing context]
    this.setState({searchField: e.target.value})
  }

  render() {

    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
      <h1> Monsters Rolodex </h1>
        <SearchBox
        placeholder='search monsters'
        handleChange={this.handleChange}/>
        <CardList monsters= {filteredMonsters}/>
      </div>
    );
  }
}

export default App;
