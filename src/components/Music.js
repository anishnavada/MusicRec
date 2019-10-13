import React from "react"
import "../styles.css"
import axios from "axios"

class Music extends React.Component{
	
	constructor(props){
		super(props)
		this.deleteSong = this.deleteSong.bind(this)
	}
	
	deleteSong(){
		const url = "http://localhost:5000/reclist/deletesong/" + this.props.listkey
		console.log(url);
		const id_object = {
			"id": this.props.song.id
		}
		  axios.post(url, id_object)
      .then(res => {console.log(res.data)
      	this.props.refresh()});
	}
	
	
	render(){
		return(
			<div className="music-card card">
			  <div className="card-body">
			    <h5 className="card-title">{this.props.song.name}</h5>
			    <p className="card-text">Artist: {this.props.song.artist}</p>
			    <p className="card-text">{this.props.song.description}</p>
			    <a target="_blank" href={this.props.song.link} className="btn song-button btn-primary">Go To Song</a>
			     <button onClick={this.deleteSong} className="btn btn-warning">Delete Song From List</button>
			      <p class="card-text"><small class="text-muted">Song added by {this.props.song.author}</small></p>
			  </div>
			</div>
		)
	}
}

export default Music