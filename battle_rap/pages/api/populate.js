// import {dbConnection} from "/api/db.js"


export default async function getAPIresults(req, res){
    const apiKey = "AIzaSyAFSDkW1DnyLDEqnBUI0TKVz5WxG8BXKss";

    try{
        const response = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAFSDkW1DnyLDEqnBUI0TKVz5WxG8BXKss&channelId=UCflIAeM03JFL9ml03LwYF-g&maxResults=5&order=viewCount');
        const data = await response.json();
        console.log(data);
        res.status(200).json({results: data});

    }catch(error){
        res.status(500).json({bruh: "error"});
    }
    
}

export async function getVideoViews(videoId){

    const response = await fetch('https://www.googleapis.com/youtube/v3/videos?id={videoID&key}&key=${apiKey}&part=statistics');

    const viewCount = (await response.json()).items[0].statistics.viewCount;
    
    console.log('The video has ben viewed ${viewCount} times');
}

// getAPIresults();