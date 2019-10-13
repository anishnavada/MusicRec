import React from "react"
import axios from "axios"
import { Redirect } from 'react-router';

class AddSongModal extends React.Component{
	
	constructor(){
		super()
		
		this.onChangeName = this.onChangeName.bind(this)
		this.onChangeArtist = this.onChangeArtist.bind(this)
		this.onChangeLink = this.onChangeLink.bind(this)
		this.onChangeAuthor = this.onChangeAuthor.bind(this)
		this.onChangeDesc = this.onChangeDesc.bind(this)
		this.addSong = this.addSong.bind(this)
			
		this.state = {
			name: "",
			artist: "",
			link: "",
			author: "",
			description: "",
			reload: false
		}
	}
	
	onChangeName(e){
		this.setState({
			name: e.target.value
		})
	}
	
	onChangeArtist(e){
		this.setState({
			artist: e.target.value
		})
	}
	
	onChangeLink(e){
		this.setState({
			link: e.target.value
		})
	}
	
	onChangeAuthor(e){
		this.setState({
			author: e.target.value
		})
	}
	
	onChangeDesc(e){
		this.setState({
			description: e.target.value
		})
	}
	
	addSong(e){
		e.preventDefault();
		const song = {
			"song": {
				"name": this.state.name,
				"artist": this.state.artist,
				"link": this.state.link,
				"author": this.state.author,
				"description": this.state.description
			}
		}
		console.log(song);
	  const url = "http://localhost:5000/reclist/update/" + this.props.listkey 
	  axios.post(url, song)
      .then(res => { this.props.refresh()
      console.log(res.data)});
      
	  
	}
	
	render(){
		
		if(this.state.reload){
			const url = "/reclist/" + this.props.listkey
			return <Redirect push to={url} />;
		}
		
		return (
		   <div id="add-song" className="modal" tabIndex="-1" role="dialog">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <h5 className="modal-title">Add a Song!</h5>
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div className="add-modal-body modal-body">
				        <form onSubmit={this.addSong}>
						  <div class="form-group">
						    <label for="songName">Song Name:</label>
						    <input type="text" value={this.state.name} onChange={this.onChangeName} class="form-control" id="song-name-input" placeholder="Enter Song Name" />
						  </div>
						  <div class="form-group">
						    <label for="artist">Artist: </label>
						    <input type="text" value={this.state.artist} onChange={this.onChangeArtist} class="form-control" id="artist-input" placeholder="Enter Artist" />
						  </div>
						  <div class="form-group">
						   	<label for="link">Link: </label>
						    <input type="text" value={this.state.link} onChange={this.onChangeLink} class="form-control" id="link-input" placeholder="Enter Link" />
						    <small id="linkHelp" class="form-text text-muted">Make sure the link is valid!</small>
						  </div>
						  <div class="form-group">
						   	<label for="link">Your Name: </label>
						    <input type="text" value={this.state.author} onChange={this.onChangeAuthor} class="form-control" id="author-input" placeholder="Enter Your Name" />
						  </div>
						   <div class="form-group">
						   	<label for="link">Description: </label>
						    <input type="text" value={this.state.description} onChange={this.onChangeDesc} class="form-control" id="desc-input" placeholder="Enter a Description" />
						  </div>
						  <button type="submit" class="btn btn-primary">Add Song</button>
						</form>
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
				      </div>
				    </div>
				  </div>
			</div>
		)
	}
	
}

export default AddSongModal