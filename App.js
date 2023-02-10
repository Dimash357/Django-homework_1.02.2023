import './App.css';
import Header from './components/Header/Header';
import TodoCreate from './components/TodoCreate/TodoCreate';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React from 'react';

class App extends React.Component{
  state = { details: {}, }

  componentDidMount(){
    let data;
    axios.get('http://localhost:8000')
    .then(res =>{
      data = res.data;
      this.setState({
        details: data
      });
    })
    .catch(err => {
      console.log(err);
    })
  }
  render() {
    return (
      <div>
      <div>Hello</div>
      {this.state.details.map((output, id) => (
        <div key={id}>
          <div>
            <h2>{output.title}</h2>
            <h2>{output.name}</h2>
          </div>
        </div>
      ))}
      </div>
    )
  }
}


function App1() {

  const [todo, setTodo] = useState([

  ])

  return (
    <div className="App">
      <Header />
      <TodoCreate todo={todo} setTodo={setTodo}/>
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
