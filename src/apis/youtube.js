import axios from 'axios';
const KEY = 'AIzaSyBCzgRTyUTwliQRu2dQESJtuBGfSApctRY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});