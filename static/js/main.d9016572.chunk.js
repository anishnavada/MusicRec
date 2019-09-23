(window.webpackJsonpmusic_rec=window.webpackJsonpmusic_rec||[]).push([[0],{16:function(e,t,a){},35:function(e,t,a){e.exports=a(65)},40:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},63:function(e,t,a){e.exports=a.p+"static/media/music-button.ae6a625e.png"},64:function(e,t,a){e.exports=a.p+"static/media/question.90980219.png"},65:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(32),l=a.n(o),i=a(5),c=a(6),r=a(8),m=a(7),d=a(9),u=(a(40),a(16),function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"help-modal",className:"modal",tabIndex:"-1",role:"dialog"},s.a.createElement("div",{className:"modal-dialog",role:"document"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h5",{className:"modal-title"},"Welcome to MusicRec"),s.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},s.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),s.a.createElement("div",{className:"modal-body"},s.a.createElement("p",null,"Using this web-app you can save and share music recommendation lists with other people"),s.a.createElement("p",null,"Click the music button to start a new list, or paste the list key into the input to enter an existing list")),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close")))))}}]),t}(s.a.Component)),h=a(17),p=a(11),b=(a(22),a(13)),g=a.n(b),E=a(3),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).deleteSong=a.deleteSong.bind(Object(E.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"deleteSong",value:function(){var e="http://localhost:5000/reclist/deletesong/"+this.props.listkey;console.log(e);var t={id:this.props.song.id};g.a.post(e,t).then((function(e){return console.log(e.data)})),window.location.reload()}},{key:"render",value:function(){return s.a.createElement("div",{className:"music-card card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title"},this.props.song.name),s.a.createElement("p",{className:"card-text"},"Artist = ",this.props.song.artist),s.a.createElement("a",{href:this.props.song.link,className:"btn song-button btn-primary"},"Go To Song"),s.a.createElement("button",{onClick:this.deleteSong,className:"btn btn-warning"},"Delete Song From List")))}}]),t}(s.a.Component),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).onChangeName=e.onChangeName.bind(Object(E.a)(e)),e.onChangeArtist=e.onChangeArtist.bind(Object(E.a)(e)),e.onChangeLink=e.onChangeLink.bind(Object(E.a)(e)),e.addSong=e.addSong.bind(Object(E.a)(e)),e.state={name:"",artist:"",link:""},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeArtist",value:function(e){this.setState({artist:e.target.value})}},{key:"onChangeLink",value:function(e){this.setState({link:e.target.value})}},{key:"addSong",value:function(e){e.preventDefault();var t={song:{name:this.state.name,artist:this.state.artist,link:this.state.link}};console.log(t);var a="http://localhost:5000/reclist/update/"+this.props.listkey;g.a.post(a,t).then((function(e){return console.log(e.data)})),window.location.reload()}},{key:"render",value:function(){return s.a.createElement("div",{id:"add-song",className:"modal",tabIndex:"-1",role:"dialog"},s.a.createElement("div",{className:"modal-dialog",role:"document"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h5",{className:"modal-title"},"Add a Song!"),s.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},s.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),s.a.createElement("div",{className:"add-modal-body modal-body"},s.a.createElement("form",{onSubmit:this.addSong},s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{for:"songName"},"Song Name:"),s.a.createElement("input",{type:"text",value:this.state.name,onChange:this.onChangeName,class:"form-control",id:"song-name-input",placeholder:"Enter Song Name"})),s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{for:"artist"},"Artist: "),s.a.createElement("input",{type:"text",value:this.state.artist,onChange:this.onChangeArtist,class:"form-control",id:"artist-input",placeholder:"Enter Artist"})),s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{for:"link"},"Link: "),s.a.createElement("input",{type:"text",value:this.state.link,onChange:this.onChangeLink,class:"form-control",id:"link-input",placeholder:"Enter Link"}),s.a.createElement("small",{id:"linkHelp",class:"form-text text-muted"},"Make sure the link is valid!")),s.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Add Song"))),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close")))))}}]),t}(s.a.Component),k=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={musiclist:[],exists:!0},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://localhost:5000/reclist/"+this.props.match.params.key).then((function(t){try{console.log(t.data[0].musiclist),e.setState({musiclist:t.data[0].musiclist})}catch(a){e.setState({exists:!1})}})).catch((function(e){console.log(e)}))}},{key:"openAddModal",value:function(){console.log("DDD"),window.$("#add-song").modal("show")}},{key:"render",value:function(){var e=this;if(console.log(this.state.musiclist.length),this.state.exists){if(0==this.state.musiclist.length)return s.a.createElement("div",null,s.a.createElement("div",{className:"music-jumb jumbotron"},s.a.createElement("h1",{className:"display-4"},"Welcome to this Music List!"),s.a.createElement("p",{className:"lead"},"There are no songs in this list just yet. However, you have the power to change that! Click the button below to add songs and share with your friends."),s.a.createElement("hr",{className:"my-4"}),s.a.createElement("p",null,"You can share this list through the list key: ",this.props.match.params.key),s.a.createElement("button",{onClick:this.openAddModal,className:"btn btn-secondary btn-lg"},"Add song recommendations!")),s.a.createElement(v,{listkey:this.props.match.params.key}));var t=this.state.musiclist.map((function(t){return s.a.createElement(y,{listkey:e.props.match.params.key,song:t})}));return console.log(this.state.musiclist[0]),s.a.createElement("div",{className:"list-holder"},s.a.createElement("button",{onClick:this.openAddModal,className:"add-button btn btn-secondary"},"Add song recommendations!"),s.a.createElement("p",{className:"share-key"},"You can share this list through the list key: ",this.props.match.params.key),t,s.a.createElement(v,{listkey:this.props.match.params.key}))}return s.a.createElement("div",null,s.a.createElement("div",{className:"music-jumb jumbotron"},s.a.createElement("h1",{className:"display-4"},"Sorry! This Music List doesn't exist!"),s.a.createElement("p",{className:"lead"},"There is no music list associated with this key/url. Go back to the home page to try another key or create a new list."),s.a.createElement("hr",{className:"my-4"}),s.a.createElement(h.b,{to:"/"},s.a.createElement("button",{className:"btn btn-secondary btn-lg"},"Go to HomePage"))))}}]),t}(s.a.Component),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).createList=e.createList.bind(Object(E.a)(e)),e.onChangeKey=e.onChangeKey.bind(Object(E.a)(e)),e.navigatePage=e.navigatePage.bind(Object(E.a)(e)),e.state={redirect:!1,redirect_two:!1,existingkey:"",listkey:"NULL"},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"onChangeKey",value:function(e){this.setState({existingkey:e.target.value})}},{key:"createList",value:function(){var e=this;g.a.post("http://localhost:5000/reclist/add").then((function(t){return e.setState({listkey:t.data,redirect:!0})}))}},{key:"navigatePage",value:function(){this.setState({redirect_two:!0})}},{key:"render",value:function(){if(this.state.redirect_two){var e="/reclist/"+this.state.existingkey;return s.a.createElement(p.a,{push:!0,to:e})}if(this.state.redirect){var t="/reclist/"+this.state.listkey;return s.a.createElement(p.a,{push:!0,to:t})}return s.a.createElement("div",{className:"home-div"},s.a.createElement("div",{className:"jumbotron"},s.a.createElement("h1",{className:"display-4"},"Start a new Music Recommendation List!"),s.a.createElement("p",{className:"lead"},"Click the button below to create a list, add music you like, and share with friends!"),s.a.createElement("img",{onClick:this.createList,className:"music-button",src:a(63)})),s.a.createElement("div",{className:"jumbotron"},s.a.createElement("h1",{className:"display-4"},"Looking for an existing Recommendation List?"),s.a.createElement("p",{className:"lead"},"Paste the link down below and find the list!"),s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("input",{type:"text",value:this.state.existingkey,onChange:this.onChangeKey,className:"form-control",placeholder:"List Key"}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("button",{onClick:this.navigatePage,className:"btn btn-outline-secondary",type:"button",id:"button-addon2"},"Search")))))}}]),t}(s.a.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(m.a)(t).call(this))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"openHelpModal",value:function(){window.$("#help-modal").modal("show")}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(h.a,null,s.a.createElement("h1",{className:"title"},"M u s i c R e c ",s.a.createElement("img",{onClick:this.openHelpModal,className:"help",src:a(64)})),s.a.createElement(u,null),s.a.createElement(p.d,null,s.a.createElement(p.b,{path:"/reclist/:key",component:k}),s.a.createElement(p.b,{path:"/",component:f}))))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.d9016572.chunk.js.map