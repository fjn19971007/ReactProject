import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TYSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = "AIzaSyCdfkVMSg5OLrThP2FXPjanRL3Vlthu9sw";


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {videos: [] };

		TYSearch({key: API_KEY, term: 'gopro'}, videos => {
			this.setState({videos});
		});
	}

	render() {
	return (
		<div>
			<SearchBar />
			<VideoList videos={this.state.videos } />
		</div>);
	}
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));