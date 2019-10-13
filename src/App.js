import React from 'react';
import logo from './logo.svg';
import './styles.css';
import HelpModal from "./components/HelpModal"
import { Switch, BrowserRouter as Router, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import $ from "jquery"
import RecommendationList from "./components/RecommendationList"
import Home from "./components/Home"

class App extends React.Component{
  
  constructor(){
		super()
	}
	
  openHelpModal(){
  	window.$('#help-modal').modal('show');
  }
  
  
  render() { 
	  return (
	    <div>
	    	<Router>
	    	<h1 className="title">M u s i c R e c <img onClick={this.openHelpModal} className="help" src={require('./images/question.png')} /></h1>
	    	<HelpModal /> 
	    		<Switch> 
	    			<Route path="/reclist/:key" component={RecommendationList} />
	    			<Route path="/" component={Home} /> 
	    		</Switch>
	    	</Router>
	    </div>
	  )
   }
}

export default App;
