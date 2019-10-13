import React from 'react'
import axios from 'axios'
import "../styles.css"
import Music from "./Music"
import AddSongModal from "./AddSongModal"
import { Link } from "react-router-dom" 
import $ from "jquery"

class RecommendationList extends React.Component{
	constructor(){
		super()
		this.refresh = this.refresh.bind(this)
		this.state = {
			musiclist: [],
			exists: true
		}
	}
	
	componentDidMount() {
	    axios.get('http://localhost:5000/reclist/' + this.props.match.params.key)
	      .then(response => {
	      	try{
	      		console.log(response.data[0].musiclist)
		        this.setState({musiclist: response.data[0].musiclist})
	      	}
	      	catch(error){
	      		this.setState({exists: false})
	      	}
	      })
	      .catch((error) => {
	        console.log(error);
	      })
  	}
  	
  	refresh(){
  		console.log("HELLO");
  		 window.$('#add-song').modal('hide');
  		 axios.get('http://localhost:5000/reclist/' + this.props.match.params.key)
	      .then(response => {
	      	try{
	      		console.log(response.data[0].musiclist)
		        this.setState({musiclist: response.data[0].musiclist})
	      	}
	      	catch(error){
	      		this.setState({exists: false})
	      	}
	      })
	      .catch((error) => {
	        console.log(error);
	      })
  
  	}
  	
  	openAddModal(){
  		console.log("DDD")
  		window.$('#add-song').modal('show');
  	}
	
	render(){
		console.log(this.state.musiclist.length)
		if (!this.state.exists){
			return(
					<div>
					<div className="music-jumb jumbotron">
					  <h1 className="display-4">Sorry! This Music List doesn't exist!</h1>
					  <p className="lead">There is no music list associated with this key/url. Go back to the home page to try another key or create a new list.</p>
					  <hr className="my-4"/>
					  <Link to={"/"}><button className="btn btn-secondary btn-lg">Go to HomePage</button></Link>
					</div>
				</div>
			)
		}
		else if(this.state.musiclist.length == 0){
			return (
				<div>
					<div className="music-jumb jumbotron">
					  <h1 className="display-4">Welcome to this Music List!</h1>
					  <p className="lead">There are no songs in this list just yet. However, you have the power to change that! Click the button below to add songs and share with your friends.</p>
					  <hr className="my-4"/>
					  <p>You can share this list through the list key: {this.props.match.params.key}</p>
					  <button onClick={this.openAddModal} className="song-button btn btn-secondary btn-lg">Add song recommendations!</button>
					 <Link to={"/"}><button className="btn btn-secondary btn-lg">Go to HomePage</button></Link>
					</div>
					<AddSongModal refresh={this.refresh} listkey={this.props.match.params.key}/>
				</div>
			)
		}
		else {
			
			const songComponents = this.state.musiclist.map(s => <Music refresh={this.refresh} listkey={this.props.match.params.key} song={s}/>)
			console.log(this.state.musiclist[0]);
			return(
			    <div className="list-holder">	
					<button onClick={this.openAddModal} className="song-button add-button btn btn-secondary">Add song recommendations!</button>
					<p className="share-key">You can share this list through the list key: {this.props.match.params.key}</p>
					 <Link to={"/"}><button className="btn home-button btn-secondary btn-lg">Go to HomePage</button></Link>
				    {songComponents}
				    <AddSongModal refresh={this.refresh} listkey={this.props.match.params.key}/>
				</div>
			)
		}
	}
}

export default RecommendationList
