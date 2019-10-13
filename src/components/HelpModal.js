import React from "react"

class HelpModal extends React.Component{
	
	render(){
		return (
		   <div id="help-modal" className="modal" tabIndex="-1" role="dialog">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <h5 className="modal-title">Welcome to MusicRec</h5>
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div className="modal-body">
				        <p>Using this web-app you can save and share music recommendation lists with other people</p>
				        <p>Click the music button to start a new list, or paste the list key into the input to enter an existing list</p>
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

export default HelpModal