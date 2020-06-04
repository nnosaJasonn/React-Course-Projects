import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';
import axios from 'axios';
class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    componentDidMount() {
        this.onFormSubmit('badger badger mushroom')
    }

    onFormSubmit = async (term) => {
        console.log(term);
        const res = await youtube.get("/search", {
            params: {
              q: term,
              part: "snippet",
              maxResults: 5,
              key: 'AIzaSyBCzgRTyUTwliQRu2dQESJtuBGfSApctRY'
            }
        })
        
        this.setState({videos: res.data.items, selectedVideo: res.data.items[0]})
    }

    onVideoSelect = (video) => {

        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className="ui container">
            <SearchBar onFormSubmit={this.onFormSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo}/>
                </div>
                <div className="five wide column">
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                <h1>HELLO ELIJAH!</h1>

                </div>
                </div>
            </div>
            </div>
            
            )
    }
}

export default App;