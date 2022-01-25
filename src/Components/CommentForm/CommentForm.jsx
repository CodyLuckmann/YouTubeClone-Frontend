import axios from 'axios';
import { React, useState } from 'react';


const CommentForm = (props) => {

const [video_id, setVideoId] = useState('');
const [text, setText] = useState('');

const handleVideo_id = (e) => {
    setVideoId(e.target.value);
};

const handleText = (e) => {
    setText(e.target.value);
};

const handleSubmit = async (e) => {
    e.preventDefault();
    let comment = 
        {
            video_id: video_id,
            text: text,

        }
    let response = await axios.post('http://127.0.0.1:8000/api/comments/', comment);
    
}
}