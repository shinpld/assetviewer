import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import './App.css';
import {base,db} from './Base.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component{
  constructor(){
    super();
    this.state={
      items: [],
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  componentDidMount(){

   
        base.syncState(`AeroAsset`, {
          context: this,
          state: 'items',
          asArray: true
        });
        
      
  }



  render(){
    const {items, searchfield} =this.state;
    const filteredItems = this.state.items.filter(items=>{
      return (items.Asset.toString().toLowerCase().includes(searchfield.toLowerCase())
    ||items.Location.toString().toLowerCase().includes(searchfield.toLowerCase())
    ||items.Building_Fl.toString().toLowerCase().includes(searchfield.toLowerCase())
    ||items.Asset_description.toString().toLowerCase().includes(searchfield.toLowerCase())
    ||items.Asset_Sup.toString().toLowerCase().includes(searchfield.toLowerCase())
    );

    }  )

    
    if(!items.length){
      return <h1>Loading...</h1>
    }

    return (
      <div className='tc'>
        <h1 className='f1'> AssetViewer </h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList items={filteredItems} />
        </Scroll>
      </div>
    );
  }



}

export default App;