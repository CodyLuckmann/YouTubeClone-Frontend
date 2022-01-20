import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoginForm from './Components/LoginForm/LoginForm';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import { googleAPIKey } from "./Keys";
import axios from 'axios';


function App() {

  const [video, setVideo] = useState([])
  let videoId = "Z83I2tz5UzM"


  useEffect(() => {
    getVideo();
  }, [])

  async function getVideo() {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${videoId}}&key=${googleAPIKey}`)
    setVideo(response.data.items)
    console.log(response.data.items)
  }
  console.log('video', video)
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<VideoPlayer someVideo={videoId} />}/>
          <Route path="/Login" element={<LoginForm />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
