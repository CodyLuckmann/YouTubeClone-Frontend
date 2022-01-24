import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoginForm from './Components/LoginForm/LoginForm';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import { googleAPIKey } from "./Keys";
import axios from 'axios';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import RelatedVideos from './Components/RelatedVideos/RelatedVideos';
import NavBar from './Components/NavBar/NavBar';
import jwt_decode from 'jwt-decode';
import SearchBar from './Components/SearchBar/SearchBar';


function App() {

  const [video, setVideo] = useState([])
  const [videoId, setVideoId] = useState(["Z83I2tz5UzM"])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [vidSearch, setVidSearch] = useState([])

  
  const [user, setUser] = useState(null);

  useEffect(() => {
    getVideo();
    getRelatedVideos();
    getTitleDescription();
    const jwt = localStorage.getItem('token');
        try{
            const decodedUser =jwt_decode(jwt);
            setUser(decodedUser);

        } catch {}
  }, [])

  const filterVideos = async (searchTerm) => {
    console.log(searchTerm);
    let matchingVideo = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${googleAPIKey}&part=snippet`)   
    // setVideo(matchingVideo.data.items)
    setVidSearch(matchingVideo.data.items)
    
  };
  
  async function getTitleDescription() {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${videoId}}&key=${googleAPIKey}&part=snippet`)
      setTitle(response.data.items[0].snippet.title)
      setDescription(response.data.items[0].snippet.description)
  }

  async function getRelatedVideos() {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${googleAPIKey}&part=snippet`)
    console.log('poo', response.data)
    setVideo(response.data.items)
  }

  async function getVideo() {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${videoId}}&key=${googleAPIKey}&part=snippet`)
    setVideo(response.data.items)
    console.log(response.data.items)
  }
  console.log('video', video)
  
  return (
    <div>
      <Router>
        <NavBar user={user}/>
        <SearchBar filterVideos={filterVideos} />
        <Routes>
          <Route path="/" element={<VideoPlayer someVideo={videoId} title={title} description={description} searchResults = {vidSearch}   />}/>
          <Route path="/Login" element={<LoginForm />}/>
          <Route path="/register" element={<RegistrationForm />}/>
          <Route path="/Related" element={<RelatedVideos  video={video}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
