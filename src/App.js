import React,{Component} from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/searchBox/searchBox-component';

import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      jobs:[],
      searchField: ''
    }
  }
  // load data when website get loaded
  componentDidMount(){
    fetch('positions.json?description=javascript&location=new+york')
    .then(response => response.json())
    .then(jsonData => this.setState( {jobs: jsonData} ));
  }

  // arrow function will automatically bind the function with this
   handelChange = e => {
   this.setState({searchField: e.target.value})
  }

  render(){
    // destructuring state 
    const {jobs, searchField} = this.state;
    const filterJobs = jobs.filter( data => data.title.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Job Search</h1>
        <SearchBox placeholder='full stack' handelChange = {this.handelChange}/>
        <CardList jobs={filterJobs}></CardList>
        
        
        
      </div>
    )
  }
}

export default App;
