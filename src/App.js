import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoginForm from './Components/LoginForm/LoginForm';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import { googleAPIKey } from "./NewKeys";
import axios from 'axios';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import RelatedVideos from './Components/RelatedVideos/RelatedVideos';
import NavBar from './Components/NavBar/NavBar';
import jwt_decode from 'jwt-decode';
import SearchBar from './Components/SearchBar/SearchBar';
import CommentForm from './Components/CommentForm/CommentForm';
import CommentList from './Components/CommentList/CommentList';
import ReplyForm from './Components/ReplyForm/ReplyForm';
import ReplyList from './Components/ReplyList/ReplyList';


function App() {

  const [video, setVideo] = useState([])
  const [videoId, setVideoId] = useState("YQHsXMglC9A")
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [vidSearch, setVidSearch] = useState([])
  const [relatedVids, setRelatedVids] = useState([])
  const [comments, setComments] = useState([])
  const [replies, setReplies] = useState([])
  const [entries,  setEntries] = useState([])
  const [user, setUser] = useState(null);

  useEffect(() => {
    getVideo();
    getComments();
    getRelatedVideos();
    getTitleDescription();
    const jwt = localStorage.getItem('token');
        try{
            const decodedUser =jwt_decode(jwt);
            setUser(decodedUser);

        } catch {}
  }, [videoId])

  const filterVideos = async (searchTerm) => {
    console.log(searchTerm);
    let matchingVideo = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchTerm}&key=${googleAPIKey}`)   
    setVidSearch(matchingVideo.data.items)
    console.log('Hello', matchingVideo.data)
    
  };
  
  function NewComment(entry){
    let tempComments = [...entries, entry];
    setEntries(tempComments)
  }

  async function getTitleDescription() {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${videoId}&key=${googleAPIKey}&part=snippet`)
      setTitle(response.data.items[0].snippet.title)
      setDescription(response.data.items[0].snippet.description)
  }

  async function getRelatedVideos() {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${googleAPIKey}&part=snippet`)
    console.log('poo', response.data)
    setRelatedVids(response.data.items)
  }

  async function getVideo() {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${videoId}&key=${googleAPIKey}&part=snippet`)
    setVideo(response.data.items)
    console.log(response.data.items)
  }
  // console.log('video', video)

  async function searchResult(id) {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${id}&key=${googleAPIKey}&part=snippet`)
    setVideo(response.data.items)
    console.log(response.data.items)
  }

  async function getComments() {
    let response = await axios.get(`http://127.0.0.1:8000/api/comments/comments/${videoId}/`)
    setComments(response.data)
    console.log(response.data)
  }
  
  async function postReplies() {
    let response = await axios.post('http://127.0.0.1:8000/api/comments/reply/')
    setReplies(response.data)

  }

  return (
    <div>
      <Router>
        <NavBar user={user}/>
        <SearchBar filterVideos={filterVideos} />
        <RelatedVideos setVideoId={setVideoId} relatedVids={relatedVids} />
        <Routes>
          <Route path="/" element={<VideoPlayer setVideoId={setVideoId} someVideo={videoId} title={title} description={description} searchResults = {vidSearch}/>}/>
          <Route path="/Login" element={<LoginForm />}/>
          <Route path="/register" element={<RegistrationForm />}/>
        </Routes>
        <CommentForm video_id={videoId} addComment={getComments} />
        <CommentList video_id={videoId} comment={comments} />
        <ReplyForm addReply={postReplies} comment_id={comments} />
        <ReplyList comment={replies} />
      </Router>
    </div>
  );
}

export default App;
