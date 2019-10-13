import React from 'react'
import "../styles.css"
import { Redirect } from 'react-router';
import axios from 'axios'

class Home extends React.Component{
	constructor(){
		super()
		this.createList = this.createList.bind(this);
		this.onChangeKey = this.onChangeKey.bind(this);
		this.navigatePage = this.navigatePage.bind(this);
		this.state = {
			redirect: false,
			redirect_two: false,
			existingkey: "",
			listkey: "NULL"
		}
	}
	
	onChangeKey(e){
		this.setState({
			existingkey: e.target.value
		})
	}
	
	createList(){
		 axios.post('http://localhost:5000/reclist/add')
      .then(res => this.setState({
      		listkey: res.data,
      		redirect: true
      }));
	}
	
	navigatePage(){
		this.setState({
			redirect_two: true
		})
	}
	
	render(){
		 if(this.state.redirect_two){
		 	const url = "/reclist/" + this.state.existingkey
		 	return <Redirect push to={url} />;
		 }
		 if (this.state.redirect) {
		 	const url = "/reclist/" + this.state.listkey
		    return <Redirect push to={url} />;
		  }
	
		return (
			<div className="home-div">
				
				<div className="jumbotron">
				  <h1 className="display-4">Start a new Music Recommendation List!</h1>
				  <p className="lead">Click the button below to create a list, add music you like, and share with friends!</p>
				  <img onClick={this.createList} className="music-button" src={require('../images/music-button.png')} />
				</div>
				
				<div className="jumbotron">
				  <h1 className="display-4">Looking for an existing Recommendation List?</h1>
				  <p className="lead">Paste the link down below and find the list!</p>
				  <div className="input-group mb-3">
					  <input type="text" value={this.state.existingkey} onChange={this.onChangeKey} className="form-control" placeholder="List Key"/>
					  <div className="input-group-append">
					    <button onClick={this.navigatePage} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
					  </div>
				  </div>
				</div>
			
			</div>
		)
	}
}

export default Home
