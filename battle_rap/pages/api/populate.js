var db = require('./db.js')

var pageKey = "";


export default async function getAPIresults(req, res){
    const apiKey = "AIzaSyAFSDkW1DnyLDEqnBUI0TKVz5WxG8BXKss";
    const order = "viewCount";
    const maxResults = "1";
    const channelId = "UCflIAeM03JFL9ml03LwYF-g";
    const part = "snippet";
    var endPoint = null;
    var vidIds = [];
    

    try{
        // do{
            
        // }while(pageKey !== null)

        if(pageKey !== null){
            endPoint = `https://www.googleapis.com/youtube/v3/search?part=${part}&key=${apiKey}&channelId=${channelId}&maxResults=${maxResults}&order=${order}&pageToken=${pageKey}`
        }else{
            endPoint = `https://www.googleapis.com/youtube/v3/search?part=${part}&key=${apiKey}&channelId=${channelId}&maxResults=${maxResults}&order=${order}`
        }

        //Get the data from the Youtube API and convert to JSON
        const response = await fetch(endPoint);
        const data = await response.json();  

        //Get the video IDs from the information so that we can get info for each battler
        vidIds = getVidIds(data, vidIds);
        // getNames(data);
        // vidIds.push(...getVidIds(data, vidIds));
        
        

        // console.log(pageKey);
        res.status(200).json({results: data});
        console.log(data);


    }catch(error){
        res.status(500).json({error:error.message});
    }

    
    
}

// function getNames(data){
//     const vidTitle = data.items[0].snippet.title;

//     // Split the input string by "VS"
//     const nameArray = vidTitle.split("VS");

//     // Trim leading and trailing whitespace from the two names
//     const name1 = nameArray[0].trim();

//     // Split the second name by the first space character
//     const name2Array = nameArray[1].split(" ");

//     // The first element in the resulting array is the second name
//     const name2 = name2Array[1].trim();

//     console.log(name1);  // Output: "LOADED LUX"
//     console.log(name2);  // Output: "CHARLIE CLIPS"

// }

async function getVidIds(data, vidIds){
    const itemObjs = data.items;
    
    itemObjs.map(obj => vidIds.push(obj.id.videoId));

    if(data.nextPageToken !== null){
        pageKey = data.nextPageToken;
    }

    return vidIds;

}

export async function getVideoViews(videoId){

    const response = await fetch('https://www.googleapis.com/youtube/v3/videos?id={videoID&key}&key=${apiKey}&part=statistics');

    const viewCount = (await response.json()).items[0].statistics.viewCount;
    
    console.log('The video has ben viewed ${viewCount} times');
}

// getAPIresults();