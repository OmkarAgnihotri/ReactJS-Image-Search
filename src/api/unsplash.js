import axios from 'axios';

const unsplash = axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID mJPOs6g1sa4yfwF311olHG4InGse3YElOAOzEbmu4Uo'
    }
});

export default unsplash;