import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

class App extends Component {
  state = {
    fields: {},
    data: []
  };

  onSubmit = (fields) => {
    const { data } = this.state;
    const pushes = [...data];
    pushes.push(fields);
    this.setState({
      fields: fields,
      data: pushes
    });
    // this.state.data.push(this.state.fields); 
  };

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.onSubmit}/>
        <tr>
        <th>Username</th>
        <th>Password</th>
        <th>Technology</th>
        </tr>
        
        {this.state.data.map((fields , index)=>{
          
          return (
            <p key ={index}>
            <tr>
        <td>{JSON.stringify(fields.username)}</td>
        <td>{JSON.stringify(fields.password)}</td>
        <td>{JSON.stringify(fields.select)}</td>
        </tr>
        </p>
      )})}
        
       
      </div>
    );
  }
}

export default App;
