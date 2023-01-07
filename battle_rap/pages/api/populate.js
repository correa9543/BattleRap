var db = require('./db.js')
const stringSimilarity = require("string-similarity");

var pageKey = "";
const apiKey = "AIzaSyAFSDkW1DnyLDEqnBUI0TKVz5WxG8BXKss";
var battlerNames = [
    "roc", "tay", "tay roc", "clips", "charlie", "charlie clips", "arsonal", "dna", "holla", "hitman", "hitman holla",
    "k-shine", "tsu", "surf", "tsu surf", "conceited", "hollow", "da", "hollow da", "hollow da don", "don", "da don",
    "aye", "verb", "aye verb","dizaster", "t-rex", "shotgun", "suge", "shotgun suge", "john", "john john", "john john da",
    "john john da don", "john da don", "goodz", "goodz:", "t-top", "calicoe", "nu", "nu jerzey", "nu jerzey twork", "twork",
    "jerzey twork", "geechi", "gotti", "geechi gotti", "daylyt", "math", "hoffa", "math hoffa", "loaded", "lux",
    "loaded lux", "chess", "rum", "nitty", "rum nitty", "brizz", "rawsteen","pat", "stay", "pat stay",  "brizz rawsteen", "jc", "ill", "will",
    "ill will", "b", "magic", "b magic", "b-magic","b-magic/", "cortez", "bill", "collector", "bill collector", "murda", "mook",
    "murda mook", "iron", "solomon", "iron solomon", "big", "t", "big t", "big-t", "bigg", "k", "bigg k", "big k",
    "o", "red", "o red", "o-red", "danny", "myers", "danny myers", "chilla", "jones", "chilla jones", "ave", "40",
    "b.a.r.s", "40 b.a.r.s", "qleen", "paper", "qleen paper", "cassidy", "yung", "ill", "yung ill", "chef", "trez",
    "chef trez", "head", "ice", "head ice", "serius", "jones", "serius jones", "marv", "won", "marv won", "marvwon",
    "qp", "qp(qleen)", "swave", "sevah", "swave sevah", "bonnie", "godiva", "bonnie godiva", "e", "ness", "e ness",
    "e ness", "x-factor", "x", "factor", "real", "deal", "real deal", "realdeal", "o'fficial", "official", "qb",
    "qb black", "qb black diamond", "diamond", "diamond black", "pass", "th3", "saga", "the saga", "jaz", "the", "jaz the",
    "jaz the rapper", "rapper", "the rapper", "bad", "newz", "bad newz", "young", "kannon", "young kannon", "steams",
    "mr", "wavy", "mr wavy", "ms", "hustle", "ms hustle", "ms.hustle", "kannon", "big kannon", "jakk", "boy", "maine",
    "jakkboy", "boy maine", "jakkboy maine", "jakk boy maine", "rosenberg", "raw", "rosenberg raw", "reed", "dollaz",
    "reed dollaz", "quest", "mcody", "quest mcody", "loso", "rich", "dolarz", "rich dolarz", "ms.", "fit", "ms. fit",
    "prep", "showoff", "shooney", "mike", "p", "mike p", "e-hart", "e" , "hart", "ehart", "ah", "di", "boom", "di boom",
    "ahdi boom", "prez", "mafia", "prez mafia", "b", "dot", "b dot", "danja" , "zone", "danja zone", "lotta", "zay",
    "lotta zay", "lottazay", "dot", "tech", "9", "tech 9", "jae", "mills", "millz", "jae millz", "jae mills", "bangz",
    "snake", "eyez", "snake eyez", "sno", "glueazy", "ryda", "born", "nuborn", "drugz", "jimz", "xcel", "money", "bagz",
    "money bagz", "ty", "law", "ty law", "heartless", "gjonaj", "brixx", "belvy", "brixx belvy", "j", "murda", "j murda",
    "mackk", "myron", "mackk myron", "dose", "craig", "lamar", "craig lamar",  "kg", "tha", "poet", "kg tha", "kg tha poet",
    "tha poet", "dougy", "viixen", "assassin", "viixen the assassin", "the assassin", "jerry", "wess", "jerry wess", 
    "midwest", "miles", "midwest miles", "gwitty", "swamp", "reepah", "rell", "reepah rell", "bankhead", "goddie", "lumenati",
    "goddie lumenati", "fettuccine", "20", "fettuccine 20", "tink", "demon", "tink da demon", "da demon", "eazy", "block",
    "captain", "block captain", "the block captain", "eazy the block captain", "eazy the", "eazy the block", "tone", "mantana",
    "tone montana",  "street", "hymns", "street hymns", "don", "marino", "don marino", "emerson", "kennedy", "emerson kennedy",
    "cali", "smoov", "cali smoov", "grizz", "yung grizz", "bedaffi", "green", "bedaffi green", "brooklyn", "carter", "brooklen carter",
    "teewhy", "illanoiz", "franchise", "jmorr", "ace", "amin", "ace amin", "lu", "castro", "lu castro", "billy", "boondocks",
    "billy boondocks", "nunn", "nunn nunn", "anibus", "ha", "double", "ha double", "piranha" , "cyssero", "ish", "mula", "ish mula",
    "presidential", "dubz", "presidential dubz", "mickey", "factz", "mickey factz", "stuey", "newton", "stuey newton",
    "holmzie", "god", "da god", "holmzie da god",  "johnie", "alcatraz", "johnie alcatraz", "your", "honor", "your honor",
    "dre", "vishiss", "dre vishiss", "so", "severe", "so severe", "lexx", "luthor", "lexx luthor", "j", "fox", "j fox", "cocky",
    "mack", "mel", "mack mel", "r", "streetz", "r streetz", "deacon", "frost", "deacon frost", "fonz", "sheed", "happens", "sheed happens",
    "barz", "major", "barz major", "jey", "nite", "wing", "jey the", "jey the nite", "jey the nite wing", "nite wing", "the nite wing",
    "quban", "mo", "mula", "mo mula", "gutta", "real", "name", "brandon", "real name", "real name brandon", "name brandon", "diesel", 
    "zeus","zues da god", "yoshi", "g", "yoshi g", "j-", "money", "j- money", "piff", "cakes", "buddyfe", "j2", "big", "hann", "big hann",
    "riggz", "moon", "squeako", "murda", "king", "h", "king h", "sikh", "real sikh", "hillz", "tru", "foe", "tru foe", "burke", "buc", 
    "burke bucs", "yo", "bull", "pnut", "yo bull", "yo bull pnut", "bull pnut", "stumbles", "raccs", "skates", "gunpowder patt",
    "gunpowder", "patt", "swaggtanna", "ap", "spanish", "harlem", "spanish harlem", "scotty", "good", "scotty good", "jmorr", "deizal",
    "dev", "dev the demon", "smoove", "juugman", "smoove da juugman", "da juugman", "plex", "prophelinni", "blake", "winters",
    "blake winters", "rad", "b", "rad b", "rebel", "kyd", "slade", "kyd slade"];

    const cleanDataNames = ["Tay Roc","Dizaster",  "Charlie Clips", "Arsonal", "DNA", "Hitman Holla", "K-Shine", "Tsu Surf", "Conceited",
    "Hollow Da Don", "Aye Verb", "T-Rex", "Shotgun Suge" , "John John Da Don", "Goodz", "Pat Stay", "T-Top", "Calicoe", "Nu Jerzey Twork",
    "Geechi Gotti", "Daylyt", "Math Hoffa", "Bill Collector", "Loaded Lux", "Chess", "Rum Nitty", "Brizz Rawsteen", "JC", "Ill Will", "Murda Mook",
    "Iron Solomon", "Big T", "Bigg K", "O-Red", "Danny Myers", "Chilla Jones","B-Magic", "Ave", "40 B.A.R.S", "Qleen Paper", "Cassidy", 
    "Yung Ill", "Chef Trez", "QP" ,"Swave Sevah", "Bonnie Godiva", "E-Ness", "QB Black Diamond", "Pass", "Th3 Saga", "Jaz The Rapper",
    "E-Ness", "X-Factor", "Real Deal", "O'fficial", "Bad Newz", "Young Kannon", "Steams", "Mr. Wavy", "Ms Hustle", "Big Kannon",
    "Jakkboy Maine", "Rosenberg Raw", "Reed Dollaz", "Quest Mcody", "Loso", "Rich Dolarz", "Ms. Fit", "Prep", "Showoff", "Shooney The Rapper",
    "Mike P", "E-Hart", "Ahdi Boom", "Prez Mafia", "B Dot", " Danja Zone", "Lotta Zay", "Dot", "Tech 9", "Jae Millz", "Bangz", 
    "Snake Eyez", "Sno", "Glueazy", "Ryda", "NuBorn", "Drugz", "Jimz", "Xcel", "Money Bagz", "Ty Law", "Heartless", "Gjonaj",
    "Brixx Belvy", "J Murda", "Mackk Myron", "Dose", "Craig Lamar", "KG Tha Poet", "Dougy", "Viixen The Assassin", "Jerry Wess",
    "Midwest Miles", "Gwitty", "Swamp", "Reepah Rell", "Bankhead", "Goddie Lumenati", "Fettuccini 20", "Tink Da Demon",
    "Eazy The Block Captain", "Tone Montana", "Street Hymns", "Don Marino", "Emerson Kennedy", "Cali Smoove", "Yung Grizz",
    "Bedaffi Green", "Brooklyn Carter", "Teewhy", "Illanoiz", "Franchise", "Jmorr", "Ace Amin", "Lu Castro", "Billy Boondocks",
    "Nunn Nunn", "Anibus", "Ha Double", "Piranha", "Cyssero", "Ish Mula", "Presidential Dubz", "Mickey Factz", "Stuey Newton",
    "Holmzie Da God", "Presidentil Dubz", "Johnie Alcatraz", "Your Honor", "Dre Vishiss", "So Severe", "Lexx Luthor", "J Fox",
    "Cocky", "Mack Mel", " R Streetz", "Deacon Frost", "Fonz", "Sheed Happens", "Barz Major", "Jey The Nite Wing", "Quban",
    "Mo Mula", "Gutta", "Real Name Brandon", "Diesel", "Zeus Da God", "Yoshi G", "J-Money", "Piff", "Cakes", "Buddyfe", "J2",
    "Big Hann", "Riggz", "Moon", "Squeako", "Murda", "King H", "Real Sikh", "Hillz", "Tru Foe", "Burke", "Burke Bucs",
    "Yo Bull Pnut", "Stumbles", "Raccs", "Skates", "Gunpowder Patt", "Swaggtanna", "AP", "Spanish Harlem", "Scotty Good", "Jmorr",
    "Deizal", "Dev The Demon", "Smoov Da Juugman", "Plex", "Prophelinni", "Blake Winters", "Rad B", "Rebel"];




//Grab the title of the video and lowercase it
    //If the title contains the word "round"
    //check for &'s


export default async function getAPIresults(req, res){
    const order = "viewCount";
    const maxResults = "1";
    const channelId = "UCflIAeM03JFL9ml03LwYF-g";
    const part = "snippet";
    var endPoint = null;
    var vidID = "";
    var battlerObjs = [];
    var views = 0;
    
    try{

        if(pageKey !== null){
            endPoint = `https://www.googleapis.com/youtube/v3/search?part=${part}&key=${apiKey}&channelId=${channelId}&maxResults=${maxResults}&order=${order}&pageToken=${pageKey}`
        }else{
            endPoint = `https://www.googleapis.com/youtube/v3/search?part=${part}&key=${apiKey}&channelId=${channelId}&maxResults=${maxResults}&order=${order}`
        }

        //Get the data from the Youtube API and convert to JSON
        const response = await fetch(endPoint);
        const data = await response.json();  

        //Get the video IDs from the information so that we can get info for each battler
        vidID = getVidId(data);
        views = await getViewCount();
        
        console.log("number of views " + views);
       
        const names = getNames(data);
        const leftName = names.left;
        const right = names.right;

        // vidIds.push(...getVidIds(data, vidIds));
        

        // console.log(pageKey);
        res.status(200).json({results: data});
        console.log(data.items.id);


    }catch(error){
        res.status(500).json({error:error.message});
    }

}

function createBattlerObjects(data){

}

function getNames(data){
    
    // const vidTitle = data.items[0].snippet.title;
    var string = "Smack / URL Presents DNA vs Yung ILL | URLTV"
    var lowerCaseString = string.toLowerCase();
    const array = lowerCaseString.split(" ");
    // console.log(array);
    let index = array.indexOf("vs");

    var leftName = getLeftName(array, index-1);
    var rightName = getRightName(array, index+1);

    // console.log(leftName);
    // console.log(rightName);

    return {left: leftName, right: rightName};
}

async function getViewCount() {
    const vidID = '3ns1fySKPyk';
    const url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${vidID}&key=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const viewCount = data.items[0].statistics.viewCount;
        return viewCount;
        // console.log(`View count: ${viewCount}`);
      } catch (error) {
        console.error(error);
      }

    // return viewCount;

}

function getLeftName(array, index){

    if(index === 0){
        return array[0].charAt(0).toUpperCase() + string.slice(1);
    }

    var tempString = "";
    var previousName = "";
    for(let i = index; i >= 0; i--){
        tempString = array[i] + tempString;
        if(!battlerNames.includes(tempString)){
            // console.log("returning left name from loop")
            console.log("Left name is: ")
            if(previousName.indexOf(" ") === -1){
                return previousName.charAt(0).toUpperCase() + previousName.slice(1);
            }
            return getBestMatch(previousName);
            
        }

        previousName = tempString;
        if(i !== 0){
            tempString = " " + tempString;
        }
    }
    return getBestMatch(tempString);
}


function getRightName(array, index){
    if(index === array.length - 1){
        return array[array.length-1].charAt(0).toUpperCase() + previousName.slice(1);
    }
 

    var tempString = "";
    var previousName = "";
    for(let i = index; i < array.length; i++){
        tempString = tempString + array[i];
        if(!battlerNames.includes(tempString)){
            if(previousName.indexOf(" ") === -1){
                return previousName.charAt(0).toUpperCase() + string.slice(1);
            }
            return getBestMatch(previousName);
        }

        previousName = tempString;

        if(i !== array.length - 1){
            tempString += " ";
        }
    }

    return getBestMatch(tempString);
}

function getBestMatch(name){
    const closestName = stringSimilarity.findBestMatch(name, cleanDataNames);
    return closestName.bestMatch.target;
}

async function getVidId(data){
    // const itemObjs = data.items;
    
    // itemObjs.map(obj => vidIds.push(obj.id.videoId));

    // if(data.nextPageToken !== null){
    //     pageKey = data.nextPageToken;
    // }

    // return vidIds;

    return data.items[0].id.videoId;

}

// export async function getVideoViews(videoId){

//     const response = await fetch('https://www.googleapis.com/youtube/v3/videos?id={videoID&key}&key=${apiKey}&part=statistics');

//     const viewCount = (await response.json()).items[0].statistics.viewCount;

//     // return viewCount;
    
//     // console.log('The video has ben viewed ${viewCount} times');
// }

// getAPIresults();